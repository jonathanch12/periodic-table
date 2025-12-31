import React from "react";
import "./Legend.css";

const categoryColors = {
  "diatomic nonmetal": "#FF6B6B",
  "noble gas": "#4ECDC4",
  "alkali metal": "#FFE66D",
  "alkaline earth metal": "#FFA07A",
  metalloid: "#95E1D3",
  "polyatomic nonmetal": "#F38181",
  "post-transition metal": "#AA96DA",
  "transition metal": "#FCBAD3",
  lanthanide: "#A8E6CF",
  actinide: "#FFD3B6",
};

function Legend() {
  return (
    <div className="legend">
      <h3>Element Categories</h3>
      <div className="legend-grid">
        {Object.entries(categoryColors).map(([category, color]) => (
          <div key={category} className="legend-item">
            <div className="legend-color" style={{ backgroundColor: color }} />
            <span className="legend-label">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Legend;
