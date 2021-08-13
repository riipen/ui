import React from "react";

import Menu from "riipen-ui/components/Menu";
import MenuItem from "riipen-ui/components/MenuItem";
import Button from "riipen-ui/components/Button";

export default function Robust() {
  const [anchorState, setAnchorState] = React.useState(null);
  const [indexState, setIndexState] = React.useState(-1);

  const handleOpen = event => {
    setAnchorState(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorState(null);
  };

  const handleItemOne = () => {
    setIndexState(1);
  };

  const handleItemTwo = () => {
    setIndexState(2);
  };

  return (
    <>
      <Button color="primary" variant="contained" onClick={handleOpen}>
        Open Menu
      </Button>
      <Menu
        anchorEl={anchorState}
        closeOnSelect
        color="primary"
        onClose={handleClose}
      >
        <MenuItem onSelect={handleItemOne}>Item 1</MenuItem>
        <MenuItem onSelect={handleItemTwo}>Item 2</MenuItem>
      </Menu>
      <div>Selected Index: {indexState === -1 ? "None" : indexState}</div>
    </>
  );
}
