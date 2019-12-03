import React from "react";
import { FaChevronRight, FaTrash } from "react-icons-riipen/fa";

import Button from "@riipen-ui/components/Button";
import ButtonIcon from "@riipen-ui/components/ButtonIcon";

export default function Icons() {
  const style = {
    marginRight: "10px"
  };

  return (
    <div>
      <Button color="default" iconStart={FaTrash} variant="contained">
        Delete
      </Button>
      <span style={style} />
      <Button color="default" iconEnd={FaChevronRight} variant="contained">
        Continue
      </Button>
      <span style={style} />
      <ButtonIcon color="default" size="small">
        <FaTrash />
      </ButtonIcon>
      <span style={style} />
      <ButtonIcon color="primary" size="medium">
        <FaTrash />
      </ButtonIcon>
      <span style={style} />
      <ButtonIcon color="secondary" size="large">
        <FaTrash />
      </ButtonIcon>
    </div>
  );
}
