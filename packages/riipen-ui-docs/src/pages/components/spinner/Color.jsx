import React from "react";

import Spinner from "riipen-ui/components/Spinner";

export default function Color() {
  const style = {
    marginBottom: "30px"
  };

  return (
    <div>
      <Spinner color="primary" variant="clip" />
      <div style={style} />
      <Spinner color="secondary" variant="clip" />
      <div style={style} />
      <Spinner color="tertiary" variant="clip" />
    </div>
  );
}
