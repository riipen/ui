import React from "react";
import { FaHeart, FaMapMarker, FaPhone } from "react-icons-riipen/fa";

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
        <Tab icon={FaPhone} value="recents" />
        <Tab icon={FaHeart} value="favorites" />
        <Tab icon={FaMapMarker} value="local" />
      </Tabs>
    </div>
  );
}
