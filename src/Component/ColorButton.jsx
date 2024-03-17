import React from "react";
function ColorButton({ setColor, color="red" }) {
  return (
    <button
      onClick={() => setColor(color)}
      className="outline-none px-4 ppy-1 rounded-full text-white shadow-lg"
      style={{ backgroundColor: color,color: "violet" }}
    >
     {color.charAt(0).toUpperCase() + color.slice(1)}
    </button>
  );
}

export default ColorButton;
