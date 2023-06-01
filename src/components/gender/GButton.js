import React from "react";
import "./Gbutton.css";
import dataContext from "../../contexts/DataContext";
import { useContext ,useState} from "react";


function GButton({ gen }) {
  

  const CData = useContext(dataContext);
  const colorHandler=()=>{
    
    
  }
  return (
    <div
      className={`main-button ${gen}-style`}
      onClick={() => {
        CData.setGender((CData.gender = gen));
        
      }}
    >
      {gen}
    </div>
  );
}

export default GButton;
