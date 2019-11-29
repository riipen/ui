import React from "react";

import Menu from "@riipen-ui/components/Menu";
import MenuItem from "@riipen-ui/components/MenuItem";
import Button from "@riipen-ui/components/Button";

export default function Simple() {
  const [state, setState] = React.useState({
    anchorEl: null,
    index: -1
  });

  const handleClick = event => {
    setState({
      ...state,
      anchorEl: event.currentTarget
    });
  };

  const handleClose = () => {
    setState({
      ...state,
      anchorEl: null
    });
  };

  const selectedChange = idx => {
    setState({
      ...state,
      index: idx
    });
  };

  return (
    <React.Fragment>
      <Button onClick={handleClick}>HELLO</Button>
      <Menu
        selectChange={selectedChange}
        selectedIndex={state.index}
        anchorEl={state.anchorEl}
        onClose={handleClose}
      >
        <MenuItem>Riipen 1</MenuItem>
        <MenuItem disabled>Riipen 2</MenuItem>
        <MenuItem>Riipen 3</MenuItem>
      </Menu>
      <div>Selected Index: {state.index === -1 ? "None" : state.index}</div>
    </React.Fragment>
  );
}
