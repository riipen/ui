import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faPlus,
  faExclamationCircle
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

import Chip from "riipen-ui/components/Chip";

export default function Icons() {
  const style = {
    marginRight: "10px"
  };

  return (
    <div>
      <div>
        <Chip
          icon={<FontAwesomeIcon icon={faPlus} />}
          color="primary"
          label="Icon Start"
        />
        <span style={style} />
        <Chip
          icon={<FontAwesomeIcon icon={faTimes} />}
          color="secondary"
          label="Icon"
        />
        <span style={style} />
        <Chip
          icon={<FontAwesomeIcon icon={faExclamationCircle} />}
          disabled
          color="secondary"
          label="Icon Disabled"
        />
      </div>
    </div>
  );
}
