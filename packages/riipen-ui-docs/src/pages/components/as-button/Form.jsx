import React, { useState } from "react";

import AsButton from "riipen-ui/components/AsButton";

export default function Form() {
  const [formState, setFormState] = useState({});
  const [message, setMessage] = useState("Click a card to submit the form");

  const style = {
    marginRight: "10px"
  };

  const cardStyle = {
    boxShadow: "1px 1px 1px 1px",
    padding: "10px",
    ...style
  };

  const handleSubmit = event => {
    event.preventDefault();
    setMessage(`You submitted the form and chose: ${formState.selectedEntity}`);
  };

  const handleClick = entity => {
    setFormState({
      selectedEntity: entity.id
    });
  };

  const entities = [
    { id: 1, title: "Entity One", details: "Details One" },
    { id: 2, title: "Entity Two", details: "Details 2" }
  ];

  return (
    <>
      <form onSubmit={handleSubmit}>
        {entities.map(entity => (
          <AsButton
            ariaLabel={`Click to select ${entity.title} and submit the form`}
            key={entity.id}
            onClick={() => handleClick(entity)}
            type="submit"
          >
            <div style={cardStyle}>
              <h3>{entity.title}</h3>
              <p>{entity.details}</p>
            </div>
          </AsButton>
        ))}
      </form>
      <p>{message}</p>
    </>
  );
}
