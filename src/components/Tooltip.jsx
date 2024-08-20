import { useState } from "react";
import "../styles/Tooltip.css";

function Tooltip({ text, children }) {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div
      className="tooltip-text"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {children}
      {isVisible && <span className="tooltip-text-hov">{text}</span>}
    </div>
  );
}

export default Tooltip;
