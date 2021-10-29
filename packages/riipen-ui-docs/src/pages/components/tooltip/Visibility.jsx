import React from "react";

import Checkbox from "riipen-ui/components/Checkbox";
import Form from "riipen-ui/components/Form";
import Tooltip from "riipen-ui/components/Tooltip";

export default function Component() {
  const [state, setState] = React.useState({
    click: false,
    hover: true,
    keepOpenOnMouseLeave: false
  });

  const handleCheckbox = e => {
    const { name, checked } = e.target;
    setState(prev => ({ ...prev, [name]: checked }));
  };

  const { click, hover, keepOpenOnMouseLeave } = state;

  return (
    <>
      <div className="container">
        <div className="half">
          <Form>
            <div className="checkbox">
              <Checkbox
                checked={hover}
                color="primary"
                label="Show Tooltip On Hover"
                name="hover"
                onChange={handleCheckbox}
              />
              <div className="spacer" />
              <Checkbox
                checked={click}
                color="primary"
                label="Show Tooltip On Click"
                name="click"
                onChange={handleCheckbox}
              />
              <div className="spacer" />
              <Checkbox
                checked={keepOpenOnMouseLeave}
                color="primary"
                label="Keep Showing Tooltip On Leave"
                name="keepOpenOnMouseLeave"
                onChange={handleCheckbox}
              />
            </div>
          </Form>
        </div>
        <div className="half elementContainer">
          <Tooltip
            click={click}
            hover={hover}
            keepOpenOnMouseLeave={keepOpenOnMouseLeave}
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
          padding: 10px;
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
    </>
  );
}
