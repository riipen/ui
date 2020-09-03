import React from "react";

import Link from "riipen-ui/components/Link";

export default function Example() {
  const style = {
    marginRight: "10px"
  };

  const preventDefault = event => event.preventDefault();

  return (
    <div>
      <Link href="#color" onClick={preventDefault} color="primary">
        Link
      </Link>
      <span style={style} />
      <Link href="#color" onClick={preventDefault} color="secondary">
        Link
      </Link>
      <span style={style} />
      <Link href="#color" onClick={preventDefault} color="tertiary">
        Link
      </Link>
      <span style={style} />
      <Link href="#color" onClick={preventDefault} color="positive">
        Link
      </Link>
      <span style={style} />
      <Link href="#color" onClick={preventDefault} color="negative">
        Link
      </Link>
      <span style={style} />
      <Link href="#color" onClick={preventDefault} color="white">
        Link
      </Link>
    </div>
  );
}
