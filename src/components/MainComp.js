import React, { useEffect, useState } from "react";
import Droup1Comp from "./Droup1Comp";
import Droup2Comp from "./Droup2Comp";

const data = {
  phase1: ["phase1-lavel1", "phase1-lavel2", "phase1-lavel3"],
  phase2: ["phase2-lavel1", "phase2-lavel2", "phase2-lavel3"],
  phase3: ["phase3-lavel1", "phase3-lavel2", "phase3-lavel3"],
};

function MainComp() {
  const [drop1, setDrop1] = useState([]);
  const [drop1val, SetDrop1val] = useState([]);

  const Drop1val=val=>{
      for(let i of drop1){
          if(i===val){
              SetDrop1val(Object.values(data[i]))  //data.i 
          }
      }
    }

  const Drop2val=val=>{
      
  }

  useEffect(() => setDrop1(Object.keys(data)));
  return (
    <div>
      <Droup1Comp selectbox1={drop1} selectbox1val={Drop1val}/>
      <Droup2Comp dropdown2val={drop1val}/>
    </div>
  );
}

export default MainComp;
