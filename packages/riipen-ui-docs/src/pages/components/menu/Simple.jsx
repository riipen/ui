import React from "react";

import Menu from "@riipen-ui/components/Menu";
import MenuItem from "@riipen-ui/components/MenuItem";
import Button from "@riipen-ui/components/Button";

export default function Simple() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
      <Button onClick={handleClick}>HELLO</Button>
      <Menu anchorEl={anchorEl} onClose={handleClose}>
        <MenuItem>Riipen 1</MenuItem>
        <MenuItem>Riipen 2</MenuItem>
        <MenuItem>Riipen 3</MenuItem>
      </Menu>
    </React.Fragment>
  );
}
