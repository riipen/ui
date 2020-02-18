import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTimes,
  faPlus,
  faExclamationCircle
} from "@fortawesome/free-solid-svg-icons";

import Chip from "@riipen-ui/components/Chip";

const icon = i => props => <FontAwesomeIcon icon={i} {...props} />;

export default function Colors() {
  const style = {
    marginRight: "10px"
  };

  const iconClicked = () => {
    // eslint-disable-next-line no-alert
    alert("Icon Clicked");
  };

  return (
    <div>
      <div>
        <Chip iconStart={icon(faPlus)} color="primary" label="Icon Start" />
        <span style={style} />
        <Chip
          iconStart={icon(faTimes)}
          onIconClick={iconClicked}
          color="secondary"
          label="Icon Click"
        />
        <span style={style} />
        <Chip
          iconStart={icon(faExclamationCircle)}
          disabled
          onIconClick={iconClicked}
          color="secondary"
          label="Icon Click Disabled"
        />
      </div>
    </div>
  );
}
