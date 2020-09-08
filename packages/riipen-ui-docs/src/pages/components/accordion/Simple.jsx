import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

import Accordion from "riipen-ui/components/Accordion";
import AccordionDetails from "riipen-ui/components/AccordionDetails";
import AccordionSummary from "riipen-ui/components/AccordionSummary";
import Typography from "riipen-ui/components/Typography";

export default function Simple() {
  const style = {
    marginBottom: "10px"
  };

  const Icon = <FontAwesomeIcon icon={faChevronDown} />;

  return (
    <div>
      <Accordion>
        <AccordionSummary icon={Icon} iconProps={{ size: "small" }}>
          <Typography>Accordion With Icon</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <div style={style} />
      <Accordion>
        <AccordionSummary>
          <Typography>Accordion Without Icon</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <div style={style} />
      <Accordion disabled>
        <AccordionSummary icon={Icon} iconProps={{ size: "small" }}>
          <Typography>Disabled Accordion</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <div style={style} />
      <Accordion defaultExpanded>
        <AccordionSummary icon={Icon} iconProps={{ size: "small" }}>
          <Typography>Default Expanded</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
