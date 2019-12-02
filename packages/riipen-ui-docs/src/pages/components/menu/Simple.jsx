import React from "react";

import Menu from "@riipen-ui/components/Menu";
import MenuItem from "@riipen-ui/components/MenuItem";
import Button from "@riipen-ui/components/Button";

export default function Simple() {
  const [anchorState, setAnchorState] = React.useState(null);
  const [indexState, setIndexState] = React.useState(-1);

  const handleClick = event => {
    setAnchorState(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorState(null);
  };

  const handleOnChange = index => {
    setIndexState(index);
  };

  return (
    <React.Fragment>
      <Button onClick={handleClick}>HELLO</Button>
      <Menu
        onChange={handleOnChange}
        selectedIndex={indexState}
        anchorEl={anchorState}
        onClose={handleClose}
      >
        <MenuItem>Riipen 1</MenuItem>
        <MenuItem disabled>Riipen 2</MenuItem>
        <MenuItem>Riipen 3</MenuItem>
        <MenuItem>Riipen 4</MenuItem>
        <MenuItem>Riipen 5</MenuItem>
        <MenuItem>Riipen 5</MenuItem>
        <MenuItem>Riipen 5</MenuItem>
        <MenuItem>Riipen 5</MenuItem>
        <MenuItem>Riipen 5</MenuItem>
        <MenuItem>Riipen 5</MenuItem>
        <MenuItem>Riipen 5</MenuItem>
        <MenuItem>Riipen 5</MenuItem>
        <MenuItem>Riipen 5</MenuItem>
        <MenuItem>Riipen 5</MenuItem>
      </Menu>
      <div>Selected Index: {indexState === -1 ? "None" : indexState}</div>
    </React.Fragment>
  );
}
