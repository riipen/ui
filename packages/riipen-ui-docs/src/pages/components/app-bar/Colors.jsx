import React from "react";

import AppBar from "riipen-ui/components/AppBar";
import Toolbar from "riipen-ui/components/Toolbar";

export default function Colors() {
  const style = {
    marginBottom: "10px"
  };

  return (
    <div>
      <AppBar color="primary" position="relative">
        <Toolbar>
          <span>Riipen</span>
        </Toolbar>
      </AppBar>
      <div style={style} />
      <AppBar color="secondary" position="relative">
        <Toolbar>
          <span>Riipen</span>
        </Toolbar>
      </AppBar>
      <div style={style} />
      <AppBar color="white" position="relative">
        <Toolbar>
          <span>Riipen</span>
        </Toolbar>
      </AppBar>
      <div style={style} />
      <AppBar color="black" position="relative">
        <Toolbar>
          <span>Riipen</span>
        </Toolbar>
      </AppBar>
    </div>
  );
}
