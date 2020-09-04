import React from "react";

import Checkbox from "riipen-ui/components/Checkbox";
import Form from "riipen-ui/components/Form";
import Tooltip from "riipen-ui/components/Tooltip";

export default function Component() {
  const [click, setClick] = React.useState(false);
  const [hover, setHover] = React.useState(true);

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
            <div className="checkbox">
              <Checkbox
                checked={hover}
                color="primary"
                label="Show Tooltip On Hover"
                onChange={handleHover}
              />
              <div className="spacer" />
              <Checkbox
                checked={click}
                color="primary"
                label="Show Tooltip On Click"
                onChange={handleClick}
              />
            </div>
          </Form>
        </div>
        <div className="half elementContainer">
          <Tooltip click={click} hover={hover} tooltip={<div>Hi!</div>}>
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
    </React.Fragment>
  );
}
