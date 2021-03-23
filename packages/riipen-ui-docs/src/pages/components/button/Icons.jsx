import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faTrash } from "@fortawesome/free-solid-svg-icons";

import Button from "riipen-ui/components/Button";
import ButtonIcon from "riipen-ui/components/ButtonIcon";

export default function Icons() {
  const style = {
    marginRight: "10px"
  };

  return (
    <div>
      <Button
        color="default"
        iconStart={<FontAwesomeIcon icon={faTrash} />}
        variant="contained"
      >
        Delete
      </Button>
      <span style={style} />
      <Button
        color="default"
        iconEnd={<FontAwesomeIcon icon={faChevronRight} />}
        variant="contained"
      >
        Continue
      </Button>
      <span style={style} />
      <ButtonIcon color="default" size="small">
        <FontAwesomeIcon icon={faTrash} />
      </ButtonIcon>
      <span style={style} />
      <ButtonIcon color="primary" size="medium">
        <FontAwesomeIcon icon={faTrash} />
      </ButtonIcon>
      <span style={style} />
      <ButtonIcon color="secondary" size="large">
        <FontAwesomeIcon icon={faTrash} />
      </ButtonIcon>
    </div>
  );
}
