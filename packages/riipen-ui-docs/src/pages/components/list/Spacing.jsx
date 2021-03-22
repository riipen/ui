import React from "react";

import List from "riipen-ui/components/List";
import ListItem from "riipen-ui/components/ListItem";

export default function Spacing() {
  return (
    <List spacing={8}>
      <ListItem>List Item 1</ListItem>
      <ListItem>List Item 2</ListItem>
      <ListItem>List Item 3</ListItem>
    </List>
  );
}
