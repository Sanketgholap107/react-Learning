import { useState } from 'react';

function App() {

  let [color, setColor] = useState("black")

  const changeColor = (newColor) => {
    console.log(newColor);
    return setColor(newColor);
  }

  return (
    <>
      <div className="w-full h-screen duration-200" style={{ backgroundColor: color }}>
        <div className="fixed flex flex-wrap justify-center 
      bottom-12 inset-x-0 px-2" >
          <div className="flex flex-wrap justify-center
        gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
            <button className="outline-none px-4 py-1
            rounded-full text-white shadow-lg"
              style={{ backgroundColor: "red" }} onClick={() => changeColor("red")}>
              Red
            </button>
            <button className="outline-none px-4 py-1
            rounded-full text-white shadow-lg"
              style={{ backgroundColor: "green" }} onClick={() => changeColor("green")}>
              green
            </button>
            <button className="outline-none px-4 py-1
            rounded-full text-white shadow-lg"
              style={{ backgroundColor: "crimson" }} onClick={() => changeColor("crimson")}>
              crimson
            </button>
            <button className="outline-none px-4 py-1
            rounded-full text-white shadow-lg"
              style={{ backgroundColor: "olive" }} onClick={() => changeColor("olive")}>
              olive
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
