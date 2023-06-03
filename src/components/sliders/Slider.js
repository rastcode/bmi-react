import React from "react";
import Slider from "@mui/material/Slider";
import Info from "../information/Info";
import "./Slider.css";
import { useContext } from "react";
import dataContext from "../../contexts/DataContext";

function Sliders() {
  const CData = useContext(dataContext);
  const heightHandler = (e, newValue) => {
    CData.setHeight(newValue);
  };
  return (
    <div className="slider-container">
      <div className="information-container">
        <div className="slider">
          <h3>height</h3>
          <Slider
            orientation="vertical"
            defaultValue={160}
            type="range"
            min={100}
            max={220}
            aria-label="height"
            onChange={heightHandler}
            valueLabelDisplay="auto"
            sx={{ width: 30, borderRadius: 2 }}
          />
        </div>
        <div className="info">
          <Info inf="age" />
          <Info inf="weight" />
        </div>
      </div>
    </div>
  );
}

export default Sliders;

{
  /* <Slider
        className="slider"
        type="range"
        defaultValue={50}
        max={120}
        aria-label="ali"
        valueLabelDisplay="auto"
        style={{height:20, }}
      /> */
}
