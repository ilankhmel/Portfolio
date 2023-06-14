import { useEffect } from "react";
import Logo from "./Logo";
export default function Topbar({ isMenu, setIsMenu }) {
  const nav = ["About", "Work", "Projects", "Contact"];

  useEffect(() => {
    document.querySelectorAll(".topbar .nav-item a").forEach((anchor) => {
      anchor.addEventListener("click", function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
    });
  }, []);

  return (
    <div className="topbar full">
      <div className="main flex justify-between">
        <Logo style={{ display: "block" }} />
        {/* <div class="hexagon-container">
          <div class="hexagon">
            <span class="letter">I</span>
          </div>
          <div class="shadow"></div>
        </div> */}

        <div className="flex align-center nav-items">
          {nav.map((w, idx) => (
            <div key={w} className="nav-item">
              <span className="blue-code">0{idx + 1}. </span>
              <a className="nav-link" href={`#${w}`}>
                {w}
              </a>
            </div>
          ))}
          <div className="btn-bg">
            <a
              // href="https://docs.google.com/document/d/e/2PACX-1vRIqC5vQs-p3ZnGVyWd8B_1QPzAQ4W1UsjvOZUZMLdzQ6dCoZ6nWw7s3qg7pO0tcw/pub"
              href="https://drive.google.com/file/d/11I_M9uA2QnCjJ27tA-hOsZcXob5PmOFQ/view?usp=sharing"
              target="_blank"
            >
              <button className="btn">Resume</button>
            </a>
          </div>
        </div>
        <div class="hamburger-menu" onClick={() => setIsMenu(!isMenu)}>
          <div class={isMenu ? "hamburger-line cross" : "hamburger-line"}></div>
        </div>
      </div>
    </div>
  );
}
