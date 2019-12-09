import React from "react";

function Header({ title }) {
  return (
    <div className="card">
      <p id="title" style={{ background: title.color }}>
        {title.text}
      </p>
    </div>
  );
}

export default Header;
