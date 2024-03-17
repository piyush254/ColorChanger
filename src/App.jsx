import React, { useState } from "react";
import ColorButton from "./Component/ColorButton";

function App() {
  const [colour, setColor] = useState("#a986ed");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: colour }}
    >
      <div className="fixed flex flex-wrap justify-center  bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2  rounded-3xl">
          <ColorButton setColor={setColor} colour="red" />
          <ColorButton setColor={setColor} colour="green" />
          <ColorButton setColor={setColor} colour="blue" />
          <ColorButton setColor={setColor} colour="white" />
          <ColorButton setColor={setColor} colour="pink" />
          <ColorButton setColor={setColor} colour="yellow" />
          <ColorButton setColor={setColor} colour="purple" />
          <ColorButton setColor={setColor} colour="black" />
        </div>
      </div>
    </div>
  );
}

export default App;
