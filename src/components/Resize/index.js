import React from "react";
import Animals from "./animals.json"



function Resize(props) {
  return (
    <div>
      <a href = {{}}><img src = {Animals[props.num].image}  height = "100px" alt={Animals[props.num].name} onClick= {props.onClick} name ="clickedImage" value={Animals[props.num].name}/> </a>
    </div>
  );
}

export default Resize;


