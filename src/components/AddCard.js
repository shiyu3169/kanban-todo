import React from "react";
import uuid from "uuid";
function AddCard({ addNewCard, columnId }) {
  const onClick = () => {
    let cardText = window.prompt();
    const newCard = { id: uuid.v4(), text: cardText };
    addNewCard(columnId, newCard);
  };
  return <div onClick={onClick}>Add a card</div>;
}

export default AddCard;
