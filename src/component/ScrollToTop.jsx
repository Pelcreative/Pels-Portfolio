import React, { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: "fixed",
        bottom: "40px",
        right: "40px",
        display: visible ? "inline" : "none",
        backgroundColor: "#333",
        color: "#fff",
        border: "none",
        borderRadius: "50%",
        padding: "10px 12px",
        cursor: "pointer",
        zIndex: 1000,
      }}
      aria-label="Scroll to top"
    >
      <FaArrowUp size={20} />
    </button>
  );
};

export default ScrollToTop;
