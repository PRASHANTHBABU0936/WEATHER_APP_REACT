import React, { useState } from "react";
export default function Lottery(){
    const[rand,setrand]=useState(0);
    const hell=()=>{
let num=Math.floor(100+Math.random()*900);
setrand(num);};

 return (
    <>
      <button onClick={hell}>TRY LOTTERY ONCE</button>
      <div className="box" style={{ backgroundColor: "lightgreen", marginTop: "10px", fontSize: "24px" }}>
  {rand}
</div>

{[...rand.toString()].reduce((a, b) => a + +b, 0) === 15 && (
  <div className="won" style={{ marginTop: "30px", backgroundColor: "red", fontSize: "32px", color: "white" }}>
    YOU WON LOTTERY! CONGRATULATIONS!!!!
  </div>
)}

    </>
  );
}