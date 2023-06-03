import React from "react";
import "./Gbutton.css";
import dataContext from "../../contexts/DataContext";
import { useContext, useState } from "react";

function GButton({ gen ,style}) {
  const CData = useContext(dataContext);
  
  return (
    <div
      className={`main-button ${style}-button `}
      onClick={() => {
        CData.setGender((CData.gender = gen));
        gen==="Male"?CData.setGender(true):CData.setGender(false)
       
      }}
    >
      {gen}
    </div>
  );
  
}

export default GButton;
