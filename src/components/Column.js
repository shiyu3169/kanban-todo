import React from "react";
import Header from "./Header";
import Card from "./Card";
import AddCard from "./AddCard";

function Column({ column, addNewCard }) {
  const { title, cards } = column;

  return (
    <div className="column">
      <Header title={title} />
      {cards.map(card => (
        <Card key={card.id} card={card} />
      ))}
      <AddCard addNewCard={addNewCard} columnId={column.id} />
    </div>
  );
}

export default Column;
