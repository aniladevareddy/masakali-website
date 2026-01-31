import React, { useEffect } from "react";
import "./DishModal.css";

export default function DishModal({ open, dish, onClose }) {
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") onClose();
    }
    if (open) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open || !dish) return null;

  return (
    <div className="dm-overlay" role="dialog" aria-modal="true" onClick={onClose}>
      <div className="dm-content" onClick={(e) => e.stopPropagation()}>
        <button className="dm-close" onClick={onClose} aria-label="Close">×</button>
        <div className="dm-body">
          <div className="dm-image" style={{ backgroundImage: `url(${dish.img})` }} />
          <div className="dm-text">
            <h3>{dish.title}</h3>
            <p className="dm-price">${dish.price}</p>
            <p className="dm-desc">{dish.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
