import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);

  function handleChangeColor(){
    const newRandomColor = getRandomColor();
    setColor(newRandomColor);
  }

 function Child({onChangeColor}){
  console.log(onChangeColor);
  return <div onClick={onChangeColor} className="child" style={{ backgroundColor: "#FFF" }} />;
 }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child onChangeColor={handleChangeColor} />
      <Child onChangeColor={handleChangeColor} />
    </div>
  );
}

export default Parent;
