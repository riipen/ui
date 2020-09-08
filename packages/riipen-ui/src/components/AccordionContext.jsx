import React from "react";

const AccordionContext = React.createContext({});

if (process.env.NODE_ENV !== "production") {
  AccordionContext.displayName = "AccordionContext";
}

export default AccordionContext;
