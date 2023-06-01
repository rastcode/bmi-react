import dataContext from "../../contexts/DataContext";
import "./infor.css";
import React, { useContext } from "react";

function Info({ inf }) {
  const contextData = useContext(dataContext);
  return (
    <div className="info-container">
      <h3>{inf}</h3>
      <div className="counter">
        {inf === "age" ? contextData.age : contextData.weight}
      </div>
      <div className="buttons">
        <button
          className="button"
          onClick={() =>
            inf === "age"
              ? contextData.setAge((contextData.age -= 1))
              : contextData.setWeight((contextData.weight -= 1))
          }
        >
          -
        </button>
        <button className="button" onClick={() =>
            inf === "age"
              ? contextData.setAge((contextData.age += 1))
              : contextData.setWeight((contextData.weight += 1))
          }>+</button>
      </div>
    </div>
  );
}

export default Info;
