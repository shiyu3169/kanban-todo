import React, { useState } from "react";
import "./App.css";
import Column from "./components/Column";

function App() {
  const [columns, setColumns] = useState([
    {
      id: "123",
      title: { text: "Winnie", color: "#8e6e95" },
      cards: [
        { text: "asdhjasidja", id: "123" },
        { text: "asdhjasidjaasdhjasidja", id: "234" }
      ]
    },
    {
      id: "234",
      title: { text: "Bob", color: "#39a59c" },
      cards: [
        { text: "hello from bob", id: "345" },
        { text: "good morning sasd", id: "456" }
      ]
    },
    {
      id: "345",
      title: { text: "Thomas", color: "#344759" },
      cards: [
        { text: "hello frin thoms", id: "345" },
        { text: "good morning thoms", id: "456" }
      ]
    },
    {
      id: "456",
      title: { text: "Georgia", color: "#e8741e" },
      cards: [
        { text: "hello", id: "345" },
        { text: "good morning dasd", id: "456" }
      ]
    }
  ]);

  const addNewCard = (columnId, newCard) => {
    const newColumns = [...columns];

    for (let i = 0; i < newColumns.length; i++) {
      if (newColumns[i].id === columnId) {
        newColumns[i].cards.push(newCard);
      }
    }

    setColumns(newColumns);
  };

  return (
    <div id="board">
      {columns.map(column => (
        <Column key={column.id} column={column} addNewCard={addNewCard} />
      ))}
    </div>
  );
}

export default App;
