import React, { useState } from "react";
import ColorButton from "./Component/ColorButton";

function App() {
  const [color, setColor] = useState("khaki");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center  bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2  rounded-3xl">
          <ColorButton setColor={setColor} color="red" />
          <ColorButton setColor={setColor} color="green" />
          <ColorButton setColor={setColor} color="blue" />
          <ColorButton setColor={setColor} color="white" />
          <ColorButton setColor={setColor} color="pink" />
          <ColorButton setColor={setColor} color="yellow" />
          <ColorButton setColor={setColor} color="purple" />
          <ColorButton setColor={setColor} color="black" />
        </div>
      </div>
    </div>
  );
}

export default App;
