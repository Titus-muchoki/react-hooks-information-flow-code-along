import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);
  const [childrenColor, setChildrenColor] = useState("#FF")

  function handleChangeColor(newChildColor){
    const newRandomColor = getRandomColor();
    setColor(newRandomColor);
    setChildrenColor(newChildColor);
  }

 function Child({onChangeColor, color}){
  console.log(onChangeColor);
  return <div onClick={onChangeColor} className="child" style={{ backgroundColor: color }} />;
 }

  return (
    <div className="parent" style={{ backgroundColor: color }}>
      <Child color={childrenColor} onChangeColor={handleChangeColor} />
      <Child color={childrenColor} onChangeColor={handleChangeColor} />
    </div>
  );
}

export default Parent;
