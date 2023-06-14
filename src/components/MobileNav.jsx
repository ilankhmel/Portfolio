import React from "react";

export default function MobileNav({ isMenu }) {
  const nav = ["About", "Experience", "Work", "Contact"];

  return (
    <div className={isMenu ? "mobile-nav open" : "mobile-nav"}>
      <div className="flex align-center nav-items">
        {nav.map((w, idx) => (
          <div key={w} className="nav-item flex column">
            <span className="blue-code">0{idx + 1}. </span>
            <span>{w}</span>
          </div>
        ))}
        <div className="btn-bg">
          <button className="btn">Resume</button>
        </div>
      </div>
    </div>
  );
}
