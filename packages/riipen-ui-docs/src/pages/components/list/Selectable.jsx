import React from "react";

import List from "@riipen-ui/components/List";
import ListItem from "@riipen-ui/components/ListItem";

export default function Example() {
  return (
    <List>
      <ListItem button>Item 1</ListItem>
      <ListItem button>Item 2</ListItem>
      <ListItem button autoFocus>
        Item 3
      </ListItem>
      <ListItem button>Item 4</ListItem>
    </List>
  );
}
