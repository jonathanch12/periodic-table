import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./ElementModal.css";

function ElementModal({ element, onClose }) {
  if (!element) return null;

  return (
    <AnimatePresence>
      {element && (
        <motion.div
          className="modal-backdrop"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="modal-content"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8, opacity: 0, y: 50 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.8, opacity: 0, y: 50 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <button className="close-button" onClick={onClose}>
              ×
            </button>

            <h2>{element.name}</h2>
            <div className="modal-symbol">{element.symbol}</div>
            <p>
              <strong>Atomic Number:</strong> {element.number}
            </p>
            <p>
              <strong>Atomic Mass:</strong> {element.atomic_mass}
            </p>
            <p>
              <strong>Category:</strong> {element.category}
            </p>

            {element.image && element.image.url && (
              <img
                src={element.image.url}
                alt={element.name}
                className="element-image"
              />
            )}

            {element.summary && <p className="summary">{element.summary}</p>}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default ElementModal;
