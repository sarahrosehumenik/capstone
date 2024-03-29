import React from "react";

  
const Menu = ({ setLineColor, setLineWidth, 
setLineOpacity}) => {
  return (
    <div className="Menu">
      <label>Brush Color </label>
      <input className="picker"
        type="color"
        onChange={(e) => {
          setLineColor(e.target.value);
        }}
      />
     
      <label>Brush Width </label>
      <input
        type="range"
    
        min="3"
        max="100"
        onChange={(e) => {
          setLineWidth(e.target.value);
        }}
      />
      <label>Brush Opacity</label>
      <input
        type="range"
        min="1"
        max="100"
        onChange={(e) => {
          setLineOpacity(e.target.value / 100);
        }}
      />
      
      
    </div>
  );
};
  
export default Menu;