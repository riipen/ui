import React from "react";

import Radio from "@riipen-ui/components/Radio";
import RadioGroup from "@riipen-ui/components/RadioGroup";
import Form from "@riipen-ui/components/Form";
import Tooltip from "@riipen-ui/components/Tooltip";

export default function Component() {
  const [size, setSize] = React.useState("small");

  const handleSize = (e, value) => {
    setSize(value);
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="half">
          <Form>
            <RadioGroup label="Size" onChange={handleSize}>
              <Radio
                label={"Small"}
                value={"small"}
                color="primary"
                checked={size === "small"}
              />
              <Radio
                label={"Medium"}
                value={"medium"}
                color="primary"
                checked={size === "medium"}
              />
            </RadioGroup>
          </Form>
        </div>
        <div className="half elementContainer">
          <Tooltip size={size} tooltip={<div>Hi!</div>}>
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
    </React.Fragment>
  );
}
