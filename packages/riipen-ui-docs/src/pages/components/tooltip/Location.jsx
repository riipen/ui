import React from "react";

import Radio from "riipen-ui/components/Radio";
import RadioGroup from "riipen-ui/components/RadioGroup";
import Form from "riipen-ui/components/Form";
import Tooltip from "riipen-ui/components/Tooltip";

const POSITIONS = [
  "top-right",
  "top-center",
  "top-left",
  "center-right",
  "center-left",
  "bottom-right",
  "bottom-center",
  "bottom-left"
];
export default function Component() {
  const [position, setPosition] = React.useState("top-center");

  const handlePosition = (e, value) => {
    setPosition(value);
  };
  return (
    <>
      <div className="container">
        <div className="half">
          <Form>
            <RadioGroup label="Position" onChange={handlePosition}>
              {POSITIONS.map(pos => (
                <Radio
                  key={pos}
                  label={pos}
                  value={pos}
                  color="primary"
                  checked={position === pos}
                />
              ))}
            </RadioGroup>
          </Form>
        </div>
        <div className="half elementContainer">
          <Tooltip position={position} tooltip={<div>Hi!</div>}>
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
      `}</style>
    </>
  );
}
