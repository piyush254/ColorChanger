import React from "react";
function ColorButton({ setColor, colour = "red" }) {
  return (
    <button
      onClick={() => setColor(colour)}
      className="outline-none px-4 ppy-1 rounded-full text-white shadow-lg"
      style={{ backgroundColor: colour, color: "violet" }}
    >
      {colour.charAt(0).toUpperCase() + colour.slice(1)}
    </button>
  );
}

export default ColorButton;
