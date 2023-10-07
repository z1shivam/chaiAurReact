import { useState } from "react";

function App() {
  const [color, setColor] = useState("aquamarine");
  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-4">
          <div className="flex flex-wrap justify-center gap-4 shadow-lg bg-white p-2 rounded-full">
            <button
              onClick={() => setColor("red")}
              className="outline-none px-4 rounded-full py-2 text-white"
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setColor("green")}
              className="outline-none px-4 rounded-full py-2 text-white"
              style={{ backgroundColor: "green" }}
            >
              green
            </button>
            <button
              onClick={() => setColor("blue")}
              className="outline-none px-4 rounded-full py-2 text-white"
              style={{ backgroundColor: "blue" }}
            >
              blue
            </button>
            <button
              onClick={() => setColor("olive")}
              className="outline-none px-4 rounded-full py-2 text-white"
              style={{ backgroundColor: "olive" }}
            >
              olive
            </button>
            <button
              onClick={() => setColor("black")}
              className="outline-none px-4 rounded-full py-2 text-white"
              style={{ backgroundColor: "black" }}
            >
              black
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
