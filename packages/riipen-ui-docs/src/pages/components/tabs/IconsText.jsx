import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faMapMarker,
  faPhone
} from "@fortawesome/free-solid-svg-icons";

const icon = i => props => <FontAwesomeIcon icon={i} {...props} />;

import Tabs from "@riipen-ui/components/Tabs";
import Tab from "@riipen-ui/components/Tab";

export default function Icons() {
  const style = {
    backgroundColor: "#fff"
  };

  const [state, setState] = React.useState({
    value: "recents"
  });

  const handleChange = (e, value) => {
    setState({ ...state, value });
  };

  return (
    <div style={style}>
      <Tabs onChange={handleChange} value={state.value}>
        <Tab icon={icon(faPhone)} label="Recents" value="recents" />
        <Tab icon={icon(faHeart)} label="Favorites" value="favorites" />
        <Tab icon={icon(faMapMarker)} label="Local" value="local" />
      </Tabs>
    </div>
  );
}
