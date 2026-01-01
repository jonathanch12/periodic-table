import React from "react";
import { motion } from "framer-motion";
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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 15,
        stiffness: 300,
      },
    },
  };

  return (
    <motion.div
      className="legend"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.4 }}
      >
        Element Categories
      </motion.h3>

      <motion.div
        className="legend-grid"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {Object.entries(categoryColors).map(([category, color], index) => (
          <motion.div
            key={category}
            className="legend-item"
            variants={itemVariants}
            whileHover={{
              scale: 1.05,
              transition: { type: "spring", stiffness: 400, damping: 10 },
            }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              className="legend-color"
              style={{ backgroundColor: color }}
              whileHover={{
                rotate: 360,
                transition: { duration: 0.6 },
              }}
            />
            <span className="legend-label">
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Legend;
