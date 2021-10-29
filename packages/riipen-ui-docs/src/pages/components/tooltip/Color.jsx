import React from "react";

import Radio from "riipen-ui/components/Radio";
import RadioGroup from "riipen-ui/components/RadioGroup";
import Form from "riipen-ui/components/Form";
import Tooltip from "riipen-ui/components/Tooltip";

export default function Component() {
  const [color, setColor] = React.useState("default");

  const handleColor = (e, value) => {
    setColor(value);
  };

  return (
    <>
      <div className="container">
        <div className="half">
          <Form>
            <RadioGroup label="Color" onChange={handleColor}>
              <Radio
                label={"Default"}
                value={"default"}
                color="primary"
                checked={color === "default"}
              />
              <Radio
                label={"White"}
                value={"white"}
                color="primary"
                checked={color === "white"}
              />
              <Radio
                label={"Positive"}
                value={"positive"}
                color="primary"
                checked={color === "positive"}
              />
              <Radio
                label={"Negative"}
                value={"negative"}
                color="primary"
                checked={color === "negative"}
              />
              <Radio
                label={"Warning"}
                value={"warning"}
                color="primary"
                checked={color === "warning"}
              />
            </RadioGroup>
          </Form>
        </div>
        <div className="half elementContainer">
          <Tooltip color={color} tooltip={<div>Hi!</div>}>
            <div className={"element"}>Anchor Element</div>
          </Tooltip>
        </div>
      </div>
      <style jsx>{`
        .container {
          display: flex;
        }

        .element {
          border: 1px solid black;
          padding: 40px;
          text-align: center;
        }

        .half {
          display: flex;
          flex-direction: column;
          flex: 0 1 50%;
          background: white;
          border: 1px solid black;
        }

        .elementContainer {
          align-items: center;
          justify-content: center;
        }
      `}</style>
    </>
  );
}
