import React from "react";

import Link from "riipen-ui/components/Link";

export default function Example() {
  const style = {
    marginRight: "10px"
  };

  const preventDefault = event => event.preventDefault();

  return (
    <div>
      <Link href="#underline" onClick={preventDefault}>
        Link
      </Link>
      <span style={style} />
      <Link href="#underline" onClick={preventDefault} underline="hover">
        Link
      </Link>
      <span style={style} />
      <Link href="#underline" onClick={preventDefault} underline="always">
        Link
      </Link>
    </div>
  );
}
