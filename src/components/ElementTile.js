import React from "react";
import { motion } from "framer-motion";
import "./ElementTile.css";

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
  unknown: "#D3D3D3",
};

function ElementTile({ element, onClick }) {
  const backgroundColor = categoryColors[element.category] || "#667eea";

  return (
    <motion.div
      className="element-tile"
      style={{
        gridColumn: element.xpos,
        gridRow: element.ypos,
        background: backgroundColor,
      }}
      onClick={() => onClick(element)}
      whileHover={{ scale: 1.1, boxShadow: "0 8px 16px rgba(0,0,0,0.2)" }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        duration: 0.3,
        delay: element.number * 0.005,
      }}
    >
      <div className="element-number">{element.number}</div>
      <div className="element-symbol">{element.symbol}</div>
      <div className="element-name">{element.name}</div>
    </motion.div>
  );
}

export default ElementTile;
