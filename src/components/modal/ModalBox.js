import React from "react";
import "./ModalBox.css";
import { useContext } from "react";
import dataContext from "../../contexts/DataContext";

function ModalBox() {
  const CData = useContext(dataContext);
  return (
    <div className="modal-container">
      <div className="modal-box">
        <div className="lable">{CData.modal}</div>
      </div>
    </div>
  );
}

export default ModalBox;
