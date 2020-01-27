import React from "react";

import Popover from "@riipen-ui/components/Popover";
import Button from "@riipen-ui/components/Button";
import Radio from "@riipen-ui/components/Radio";
import RadioGroup from "@riipen-ui/components/RadioGroup";
import Form from "@riipen-ui/components/Form";

export default function Simple() {
  const anchorEl = React.useRef(null);
  const [isOpen, setIsOpen] = React.useState(false);
  const [anchorPosition, setAnchorPosition] = React.useState({
    vertical: "top",
    horizontal: "left"
  });
  const [contentPosition, setContentPosition] = React.useState({
    vertical: "top",
    horizontal: "left"
  });

  const buttonClick = () => {
    setIsOpen(prevVal => !prevVal);
  };

  const handleAnchorVertical = (e, value) => {
    setAnchorPosition({
      vertical: value,
      horizontal: anchorPosition.horizontal
    });
  };
  const handleAnchorHorizontal = (e, value) => {
    setAnchorPosition({
      vertical: anchorPosition.vertical,
      horizontal: value
    });
  };
  const handleContentVertical = (e, value) => {
    setContentPosition({
      vertical: value,
      horizontal: contentPosition.horizontal
    });
  };
  const handleContentHorizontal = (e, value) => {
    setContentPosition({
      vertical: contentPosition.vertical,
      horizontal: value
    });
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="half">
          <Form>
            <RadioGroup label="Anchor Vertical" onChange={handleAnchorVertical}>
              <Radio
                label="Top"
                value="top"
                color="primary"
                checked={anchorPosition.vertical === "top"}
              />
              <Radio
                label="Center"
                value="center"
                color="primary"
                checked={anchorPosition.vertical === "center"}
              />
              <Radio
                label="Bottom"
                value="bottom"
                color="primary"
                checked={anchorPosition.vertical === "bottom"}
              />
            </RadioGroup>
            <RadioGroup
              label="Anchor Horizontal"
              onChange={handleAnchorHorizontal}
            >
              <Radio
                label="Left"
                value="left"
                color="primary"
                checked={anchorPosition.horizontal === "left"}
              />
              <Radio
                label="Center"
                value="center"
                color="primary"
                checked={anchorPosition.horizontal === "center"}
              />
              <Radio
                label="Right"
                value="right"
                color="primary"
                checked={anchorPosition.horizontal === "right"}
              />
            </RadioGroup>
            <RadioGroup
              label="Content Vertical"
              onChange={handleContentVertical}
            >
              <Radio
                label="Top"
                value="top"
                color="primary"
                checked={contentPosition.vertical === "top"}
              />
              <Radio
                label="Center"
                value="center"
                color="primary"
                checked={contentPosition.vertical === "center"}
              />
              <Radio
                label="Bottom"
                value="bottom"
                color="primary"
                checked={contentPosition.vertical === "bottom"}
              />
            </RadioGroup>
            <RadioGroup
              label="Content Horizontal"
              onChange={handleContentHorizontal}
            >
              <Radio
                label="Left"
                value="left"
                color="primary"
                checked={contentPosition.horizontal === "left"}
              />
              <Radio
                label="Center"
                value="center"
                color="primary"
                checked={contentPosition.horizontal === "center"}
              />
              <Radio
                label="Right"
                value="right"
                color="primary"
                checked={contentPosition.horizontal === "right"}
              />
            </RadioGroup>
            <Button color="primary" variant="outlined" onClick={buttonClick}>
              Toggle Popover
            </Button>
          </Form>
        </div>
        <div className="half" ref={anchorEl}>
          Anchor Element
        </div>
        <Popover
          anchorPosition={anchorPosition}
          contentPosition={contentPosition}
          isOpen={isOpen}
          lockScroll={false}
          anchorEl={anchorEl.current}
        >
          <div className="content">Content</div>
        </Popover>
      </div>
      <style jsx>{`
        .container {
          display: flex;
        }

        .content {
          width: 100px;
          height: 100px;
          background: lightgrey;
        }

        .half {
          display: flex;
          flex-direction: column;
          flex: 0 1 50%;
          background: white;
          border: 1px solid black;
        }
      `}</style>
    </React.Fragment>
  );
}
