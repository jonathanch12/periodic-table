import React from "react";
import ElementTile from "./ElementTile";
import "./PeriodicTable.css";

function PeriodicTable({ elements, onElementClick }) {
  return (
    <div className="periodic-table-wrapper">
      <div className="periodic-table">
        {elements.map((element) => (
          <ElementTile
            key={element.number}
            element={element}
            onClick={onElementClick}
          />
        ))}
      </div>
    </div>
  );
}

export default PeriodicTable;
