import React from "react";

import Popover from "@riipen-ui/components/Popover";
import Button from "@riipen-ui/components/Button";
import Radio from "@riipen-ui/components/Radio";
import RadioGroup from "@riipen-ui/components/RadioGroup";
import Form from "@riipen-ui/components/Form";

export default function Simple() {
  const [state, setState] = React.useState({
    anchorEl: null,
    isOpen: false,
    anchorPosition: {
      vertical: "top",
      horizontal: "left"
    },
    contentPosition: {
      vertical: "top",
      horizontal: "left"
    }
  });

  const buttonClick = () => {
    setState({
      ...state,
      isOpen: !state.isOpen
    });
  };

  const handleClose = () => {
    setState({
      ...state,
      isOpen: false
    });
  };

  const handleAnchorVertical = (e, value) => {
    setState({
      ...state,
      anchorPosition: {
        vertical: value,
        horizontal: state.anchorPosition.horizontal
      }
    });
  };
  const handleAnchorHorizontal = (e, value) => {
    setState({
      ...state,
      anchorPosition: {
        vertical: state.anchorPosition.vertical,
        horizontal: value
      }
    });
  };
  const handleContentVertical = (e, value) => {
    setState({
      ...state,
      contentPosition: {
        vertical: value,
        horizontal: state.contentPosition.horizontal
      }
    });
  };
  const handleContentHorizontal = (e, value) => {
    setState({
      ...state,
      contentPosition: {
        vertical: state.contentPosition.vertical,
        horizontal: value
      }
    });
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="half">
          <Form>
            <RadioGroup
              label="Anchor Vertical"
              hint=""
              onChange={handleAnchorVertical}
              required
            >
              <Radio
                label="Top"
                value="top"
                color="primary"
                checked={state.anchorPosition.vertical === "top"}
              />
              <Radio
                label="Center"
                value="center"
                color="primary"
                checked={state.anchorPosition.vertical === "center"}
              />
              <Radio
                label="Bottom"
                value="bottom"
                color="primary"
                checked={state.anchorPosition.vertical === "bottom"}
              />
            </RadioGroup>
            <RadioGroup
              label="Anchor Horizontal"
              hint=""
              onChange={handleAnchorHorizontal}
              required
            >
              <Radio
                label="Left"
                value="left"
                color="primary"
                checked={state.anchorPosition.horizontal === "left"}
              />
              <Radio
                label="Center"
                value="center"
                color="primary"
                checked={state.anchorPosition.horizontal === "center"}
              />
              <Radio
                label="Right"
                value="right"
                color="primary"
                checked={state.anchorPosition.horizontal === "right"}
              />
            </RadioGroup>
            <RadioGroup
              label="Content Vertical"
              hint=""
              onChange={handleContentVertical}
              required
            >
              <Radio
                label="Top"
                value="top"
                color="primary"
                checked={state.contentPosition.vertical === "top"}
              />
              <Radio
                label="Center"
                value="center"
                color="primary"
                checked={state.contentPosition.vertical === "center"}
              />
              <Radio
                label="Bottom"
                value="bottom"
                color="primary"
                checked={state.contentPosition.vertical === "bottom"}
              />
            </RadioGroup>
            <RadioGroup
              label="Content Horizontal"
              hint=""
              onChange={handleContentHorizontal}
              required
            >
              <Radio
                label="Left"
                value="left"
                color="primary"
                checked={state.contentPosition.horizontal === "left"}
              />
              <Radio
                label="Center"
                value="center"
                color="primary"
                checked={state.contentPosition.horizontal === "center"}
              />
              <Radio
                label="Right"
                value="right"
                color="primary"
                checked={state.contentPosition.horizontal === "right"}
              />
            </RadioGroup>
            <Button onClick={buttonClick}>Open Popover</Button>
          </Form>
        </div>
        <div className="half" ref={ref => (state.anchorEl = ref)}>
          Anchor Element
        </div>
        <Popover
          anchorPosition={state.anchorPosition}
          contentPosition={state.contentPosition}
          isOpen={state.isOpen}
          lockScroll={false}
          anchorEl={state.anchorEl}
          handleClose={handleClose}
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
