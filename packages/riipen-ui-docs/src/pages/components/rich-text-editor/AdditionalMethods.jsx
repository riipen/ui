import React from "react";
import { CompositeDecorator } from "draft-js";

import Button from "@riipen-ui/components/Button";
import Form from "@riipen-ui/components/Form";
import RichTextEditor from "@riipen-ui/components/RichTextEditor";
import EditorLink from "@riipen-ui/components/EditorLink";

const findEntities = (contentBlock, callback, contentState) => {
  contentBlock.findEntityRanges(character => {
    const entityKey = character.getEntity();
    return (
      entityKey !== null &&
      contentState.getEntity(entityKey).getType() === "LINK"
    );
  }, callback);
};

// Add decorator to display links
const decorator = new CompositeDecorator([
  {
    strategy: findEntities,
    component: EditorLink
  }
]);

export default function AdditionalMethods() {
  const style = {
    margin: "5px"
  };

  const ref = React.useRef(null);

  const addText = () => {
    if (ref || ref.current) {
      ref.current.addText("This is the added text!");
    }
  };

  const addLink = () => {
    if (ref || ref.current) {
      ref.current.addLink({ text: "Cool link!", url: "https://ui.riipen.com" });
    }
  };

  const removeLinks = () => {
    if (ref || ref.current) {
      const selectionState = ref.current.state.editorState.getSelection();

      const startKey = selectionState.getStartKey();

      const ranges = {
        [startKey]: [
          {
            start: selectionState.getStartOffset(),
            end: selectionState.getEndOffset()
          }
        ]
      };

      ref.current.removeLinks(ranges);
    }
  };

  const addImage = () => {
    if (ref || ref.current) {
      ref.current.addImage({
        url:
          "https://assets.website-files.com/5e46ae965524be67424a8a67/5e94910d5833c84e4a49afef_89d50f_Riipen-Final-Logo-White-p-500.svg",
        altText: "Riipen"
      });
    }
  };

  return (
    <Form>
      <Button onClick={addText} variant="contained" color="primary">
        Add Text
      </Button>
      <span style={style} />
      <Button onClick={addLink} variant="contained" color="secondary">
        Add Link
      </Button>
      <span style={style} />
      <Button onClick={removeLinks} variant="contained" color="tertiary">
        Remove Links from Selection
      </Button>
      <span style={style} />
      <Button onClick={addImage} variant="contained" color="positive">
        Add Image
      </Button>
      <div style={style} />
      <RichTextEditor id="editor" decorator={decorator} ref={ref} />
    </Form>
  );
}
