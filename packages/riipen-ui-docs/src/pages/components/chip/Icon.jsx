import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faPlus,
  faExclamationCircle
} from "@fortawesome/free-solid-svg-icons";

import Chip from "riipen-ui/components/Chip";

const icon = i => props => <FontAwesomeIcon icon={i} {...props} />;

export default function Icons() {
  const style = {
    marginRight: "10px"
  };

  return (
    <div>
      <div>
        <Chip icon={icon(faPlus)} color="primary" label="Icon Start" />
        <span style={style} />
        <Chip icon={icon(faTimes)} color="secondary" label="Icon" />
        <span style={style} />
        <Chip
          icon={icon(faExclamationCircle)}
          disabled
          color="secondary"
          label="Icon Disabled"
        />
      </div>
    </div>
  );
}
