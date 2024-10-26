import React from "react";
import { useState } from "react";
import "../style.css";

import { FaSearch } from "react-icons/fa";
const HiddenSearchBar = () => {
  const [showInput, setShowInput] = useState(false);
  const [bgColor, setBgColor] = useState("white");

  const handleClick = (e) => {
    setBgColor("#1b1b1b");

    if (e.target.className === "container") {
      setShowInput(false);
      setBgColor("#fff");
    }
  };

  return (
    <div>
      <section
        style={{ backgroundColor: bgColor }}
        onClick={handleClick}
        className="container"
      >
        {showInput ? (
          <input type="text" placeholder="Search..." />
        ) : (
          <FaSearch onClick={() => setShowInput(true)} />
        )}
      </section>
    </div>
  );
};

export default HiddenSearchBar;
