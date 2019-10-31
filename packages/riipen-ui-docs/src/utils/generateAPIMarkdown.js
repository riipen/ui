import { parse as parseDoctrine } from "doctrine";
import * as recast from "recast";
import { parse as parseDocgen } from "react-docgen";

function getChained(type) {
  if (type.raw) {
    const marker = "chainPropTypes";
    const indexStart = type.raw.indexOf(marker);

    if (indexStart !== -1) {
      const parsed = parseDocgen(
        `
        import PropTypes from 'prop-types';
        const Foo = () => <div />
        Foo.propTypes = {
          bar: ${
            recast.print(
              recast.parse(type.raw).program.body[0].expression.arguments[0]
            ).code
          }
        }
        export default Foo
      `,
        null,
        null,
        // helps react-docgen pickup babel.config.js
        { filename: "./" }
      );
      return {
        type: parsed.props.bar.type,
        required: parsed.props.bar.required
      };
    }
  }

  return false;
}

function escapeCell(value) {
  // As the pipe is use for the table structure
  return value
    .replace(/</g, "&lt;")
    .replace(/`&lt;/g, "`<")
    .replace(/\|/g, "\\|");
}

function generatePropDescription(prop) {
  const { description, type } = prop;

  const parsed = parseDoctrine(description, {
    sloppy: true
  });

  // Two new lines result in a newline in the table.
  // All other new lines must be eliminated to prevent markdown mayhem.
  const jsDocText = escapeCell(parsed.description)
    .replace(/(\r?\n){2}/g, "<br>")
    .replace(/\r?\n/g, " ");

  let signature = "";

  if (type.name === "func" && parsed.tags.length > 0) {
    // Remove new lines from tag descriptions to avoid markdown errors.
    parsed.tags.forEach(tag => {
      if (tag.description) {
        tag.description = tag.description.replace(/\r*\n/g, " ");
      }
    });

    // Split up the parsed tags into 'arguments' and 'returns' parsed objects. If there's no
    // 'returns' parsed object (i.e., one with title being 'returns'), make one of type 'void'.
    const parsedLength = parsed.tags.length;

    let parsedArgs = [];
    let parsedReturns;

    if (parsed.tags[parsedLength - 1].title === "returns") {
      parsedArgs = parsed.tags.slice(0, parsedLength - 1);
      parsedReturns = parsed.tags[parsedLength - 1];
    } else {
      parsedArgs = parsed.tags;
      parsedReturns = { type: { name: "void" } };
    }

    signature += "<br><br>**Signature:**<br>`function(";
    signature += parsedArgs
      .map(tag => {
        if (tag.type.type === "AllLiteral") {
          return `${tag.name}: any`;
        }

        if (tag.type.type === "OptionalType") {
          return `${tag.name}?: ${tag.type.expression.name}`;
        }

        return `${tag.name}: ${tag.type.name}`;
      })
      .join(", ");
    signature += `) => ${parsedReturns.type.name}\`<br>`;
    signature += parsedArgs
      .map(tag => `*${tag.name}:* ${tag.description}`)
      .join("<br>");

    if (parsedReturns.description) {
      signature += `<br> *returns* (${parsedReturns.type.name}): ${parsedReturns.description}`;
    }
  }

  return `${jsDocText}${signature}`;
}

function generatePropType(type) {
  switch (type.name) {
    case "shape":
      return `{ ${Object.keys(type.value)
        .map(subValue => {
          const subType = type.value[subValue];
          return `${subValue}${subType.required ? "" : "?"}: ${generatePropType(
            subType
          )}`;
        })
        .join(", ")} }`;

    case "union":
    case "enum": {
      return (
        type.value
          .map(type2 => {
            if (type.name === "enum") {
              return escapeCell(type2.value);
            }

            return generatePropType(type2);
          })
          // Display one value per line as it's better for visibility.
          .join("<br>&#124;&nbsp;")
      );
    }

    case "arrayOf": {
      return `Array<${generatePropType(type.value)}>`;
    }

    case "instanceOf": {
      if (type.value.startsWith("typeof")) {
        return /typeof (.*) ===/.exec(type.value)[1];
      }
      return type.value;
    }

    default:
      return type.name;
  }
}

function getProp(props, key) {
  switch (key) {
    case "classes":
      return {
        ...props[key],
        required: false
      };
    default:
      return props[key];
  }
}

function generateProps(reactAPI) {
  const header = "## Props";

  let text = `${header}

| Name | Type | Default | Description |
|:-----|:-----|:--------|:------------|\n`;

  text = Object.keys(reactAPI.props).reduce((textProps, propRaw) => {
    const prop = getProp(reactAPI.props, propRaw);

    if (typeof prop.description === "undefined") {
      throw new Error(`The "${propRaw}" prop is missing a description`);
    }

    const description = generatePropDescription(prop);

    if (description === null) {
      return textProps;
    }

    let defaultValue = "";

    if (prop.defaultValue) {
      defaultValue = `<span class="prop-default">${escapeCell(
        prop.defaultValue.value.replace(/\r*\n/g, "")
      )}</span>`;
    }

    const chainedPropType = getChained(prop.type);

    let propName = propRaw;

    if (
      prop.required ||
      /\.isRequired/.test(prop.type.raw) ||
      (chainedPropType !== false && chainedPropType.required)
    ) {
      propName = `<span class="prop-name required">${propRaw}&nbsp;*</span>`;
    } else {
      propName = `<span class="prop-name">${propRaw}</span>`;
    }

    return `${textProps}| ${propName} | <span class="prop-type">${generatePropType(
      prop.type
    )}</span> | ${defaultValue} | ${description} |\n`;
  }, text);

  text = `${text}

Any other props supplied will be provided to the root element.`;

  return text;
}

function generateImportStatement(reactAPI) {
  const source = "@riipen-ui";

  return `## Import

\`\`\`js
import ${reactAPI.name} from '${source}/${reactAPI.name}';

// or

import { ${reactAPI.name} } from '${source}';
\`\`\`

You can learn more about the difference by [reading this guide](/guides/minimizing-bundle-size/).`;
}

export default function generateMarkdown(reactAPI) {
  return [
    "<!--- This documentation is automatically generated, do not try to edit it. -->",
    "",
    `# ${reactAPI.name} API`,
    "",
    `<p class="description">The API documentation of the ${reactAPI.name} React component.</p>`,
    "",
    generateImportStatement(reactAPI),
    "",
    generateProps(reactAPI)
  ].join("\n");
}
