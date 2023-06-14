import React from "react";

export default function MobileNav({ isMenu, setIsMenu }) {
  const nav = ["About", "Work", "Projects", "Contact"];

  return (
    <div className={isMenu ? "mobile-nav open" : "mobile-nav"}>
      <div className="flex align-center nav-items">
        {nav.map((w, idx) => (
          <a href={`#${w}`} onClick={() => setIsMenu(false)}>
            <div key={w} className="nav-item flex column">
              <span className="blue-code">0{idx + 1}. </span>
              <span>{w}</span>
            </div>
          </a>
        ))}
        <div className="btn-bg">
          <button className="btn">Resume</button>
        </div>
      </div>
    </div>
  );
}
