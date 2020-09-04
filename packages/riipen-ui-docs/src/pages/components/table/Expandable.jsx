import React from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faChevronUp,
  faStar
} from "@fortawesome/free-solid-svg-icons";

import TableGenerator from "riipen-ui/components/TableGenerator";

function ExpandedRow({ rating, review }) {
  return (
    <div>
      <span>{review}</span>{" "}
      {Array(rating)
        .fill()
        .map((_, i) => (
          <FontAwesomeIcon key={i} icon={faStar} />
        ))}
    </div>
  );
}
ExpandedRow.propTypes = {
  rating: PropTypes.number,
  review: PropTypes.string
};

export default function Expandable() {
  const [expanded, setExpanded] = React.useState(1);

  const entities = [
    {
      id: 1,
      name: "Into The Space Age",
      band: "Amplifier",
      album: "The Astronaut Dismantles Hal",
      rating: 4,
      review: "This is a great song about space",
      time: "4:36"
    },
    {
      id: 2,
      name: "Black Rose Immortal",
      band: "Opeth",
      album: "Morningrise",
      rating: 5,
      review: "This song is very long, but its really good",
      time: "20:14"
    },
    {
      id: 3,
      name: "Ol' Starpluck",
      band: "Swardy",
      album: "Here on My Own",
      rating: 3,
      review: "This song has no lyrics and has a nice groove",
      time: "6:43"
    }
  ];

  const shouldExpandRow = row => expanded === row.id;

  const columns = [
    {
      mobileHeader: true,
      header: () => "Song",
      cell: entity => entity.name
    },
    {
      header: () => "Band",
      cell: entity => entity.band
    },
    {
      header: () => "Album",
      cell: entity => entity.album
    },
    {
      header: () => "Time",
      cell: entity => entity.time
    },
    {
      header: () => "Action",
      cell: entity => {
        const isExpanded = entity.id === expanded;

        return (
          <FontAwesomeIcon
            icon={isExpanded ? faChevronUp : faChevronDown}
            onClick={() => {
              setExpanded(isExpanded ? null : entity.id);
            }}
          />
        );
      }
    }
  ];

  return (
    <div>
      <TableGenerator
        columns={columns}
        data={entities}
        expandedNode={ExpandedRow}
        expandRow={shouldExpandRow}
      />
    </div>
  );
}
