import React from "react";

import List from "riipen-ui/components/List";
import ListItem from "riipen-ui/components/ListItem";

export default function Variants() {
  const style = {
    marginBottom: "10px"
  };

  return (
    <React.Fragment>
      <List variant="horizontal">
        <ListItem>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
        <ListItem>List Item 3</ListItem>
      </List>
      <div style={style} />
      <List variant="vertical">
        <ListItem>List Item 1</ListItem>
        <ListItem>List Item 2</ListItem>
        <ListItem>List Item 3</ListItem>
      </List>
    </React.Fragment>
  );
}
