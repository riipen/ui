import React from "react";

import Checkbox from "@riipen-ui/components/Checkbox";
import Radio from "@riipen-ui/components/Radio";
import RadioGroup from "@riipen-ui/components/RadioGroup";
import Form from "@riipen-ui/components/Form";
import Tooltip from "@riipen-ui/components/Tooltip";

export default function Component() {
  const [anchorPosition, setAnchorPosition] = React.useState({
    vertical: "top",
    horizontal: "left"
  });
  const [contentPosition, setContentPosition] = React.useState({
    vertical: "top",
    horizontal: "left"
  });
  const [click, setClick] = React.useState(false);
  const [color, setColor] = React.useState("default");
  const [hover, setHover] = React.useState(true);

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
  const handleColor = (e, value) => {
    setColor(value);
  };
  const handleHover = e => {
    setHover(e.target.checked);
  };
  const handleClick = e => {
    setClick(e.target.checked);
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
            <div className="checkbox">
              <Checkbox
                checked={hover}
                label="Show Tooltip On Hover"
                onChange={handleHover}
              />
              <div className="spacer" />
              <Checkbox
                checked={click}
                label="Show Tooltip On Click"
                onChange={handleClick}
              />
            </div>
          </Form>
        </div>
        <div className="half elementContainer">
          <Tooltip
            anchorPosition={anchorPosition}
            contentPosition={contentPosition}
            click={click}
            color={color}
            hover={hover}
            tooltip={<div>Hi!</div>}
          >
            <div className={"element"}>Anchor Element</div>
          </Tooltip>
        </div>
      </div>
      <style jsx>{`
        .checkbox {
          padding: 10px;
        }

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

        .spacer {
          margin-bottom: 10px;
        }
      `}</style>
    </React.Fragment>
  );
}
