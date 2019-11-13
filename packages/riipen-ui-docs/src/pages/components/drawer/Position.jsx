import React from "react";

import Drawer from "@riipen-ui/components/Drawer";

export default function Position() {
  const style = {
    marginRight: "10px"
  };

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (side, open) => () => {
    setState({ ...state, [side]: open });
  };

  return (
    <div>
      <button onClick={toggleDrawer("left", true)}>Open Left</button>
      <Drawer
        anchor="left"
        open={state.left}
        onClose={toggleDrawer("left", false)}
      >
        Drawer content
      </Drawer>
      <span style={style} />
      <button onClick={toggleDrawer("right", true)}>Open Right</button>
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer("right", false)}
      >
        Drawer content
      </Drawer>
      <span style={style} />
      <button onClick={toggleDrawer("top", true)}>Open Top</button>
      <Drawer
        anchor="top"
        open={state.top}
        onClose={toggleDrawer("top", false)}
      >
        Drawer content
      </Drawer>
      <span style={style} />
      <button onClick={toggleDrawer("bottom", true)}>Open Bottom</button>
      <Drawer
        anchor="bottom"
        open={state.bottom}
        onClose={toggleDrawer("bottom", false)}
      >
        Drawer content
      </Drawer>
    </div>
  );
}
