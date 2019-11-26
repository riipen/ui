import React from "react";

import Menu from "@riipen-ui/components/Menu";
import MenuItem from "@riipen-ui/components/MenuItem";
import Button from "@riipen-ui/components/Button";

export default function Demo() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const anchorPosition = {
    vertical: "bottom",
    horizontal: "left"
  };

  const transformOrigin = {
    vertical: "top",
    horizontal: "left"
  };

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button onClick={handleClick}>HELLO</Button>
      <Menu
        anchorPosition={anchorPosition}
        transformOrigin={transformOrigin}
        anchorEl={anchorEl}
        onClose={handleClose}
      >
        <MenuItem>Riipen 1</MenuItem>
        <MenuItem>Riipen 2</MenuItem>
        <MenuItem>Riipen 3</MenuItem>
        <MenuItem>Riipen 4</MenuItem>
      </Menu>
    </div>
  );
}
