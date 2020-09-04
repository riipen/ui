import React from "react";

import Typography from "riipen-ui/components/Typography";

export default function Component() {
  return (
    <div>
      <Typography variant="h1" gutter>
        h1. Heading
      </Typography>
      <Typography variant="h2" gutter>
        h2. Heading
      </Typography>
      <Typography variant="h3" gutter>
        h3. Heading
      </Typography>
      <Typography variant="h4" gutter>
        h4. Heading
      </Typography>
      <Typography variant="h5" gutter>
        h5. Heading
      </Typography>
      <Typography variant="subtitle1" gutter>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Typography>
      <Typography variant="subtitle2" gutter>
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
        Quos blanditiis tenetur
      </Typography>
      <Typography variant="body1" gutter>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="body2" gutter>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore
        consectetur, neque doloribus, cupiditate numquam dignissimos laborum
        fugiat deleniti? Eum quasi quidem quibusdam.
      </Typography>
      <Typography variant="button" display="block" gutter>
        button text
      </Typography>
      <Typography variant="caption" display="block" gutter>
        caption text
      </Typography>
    </div>
  );
}
