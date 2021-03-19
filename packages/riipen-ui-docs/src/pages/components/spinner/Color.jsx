import React from "react";

import Spinner from "riipen-ui/components/Spinner";

export default function Color() {
  const style = {
    marginBottom: "30px"
  };

  return (
    <div>
      <Spinner color="black" variant="clip" />
      <div style={style} />
      <Spinner color="grey600" variant="clip" />
      <div style={style} />
      <Spinner color="grey800" variant="clip" />
      <div style={style} />
      <Spinner color="greyA400" variant="clip" />
      <div style={style} />
      <Spinner color="primary" variant="clip" />
      <div style={style} />
      <Spinner color="secondary" variant="clip" />
      <div style={style} />
      <Spinner color="tertiary" variant="clip" />
    </div>
  );
}
