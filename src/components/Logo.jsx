import React from "react";

export default function Logo() {
  return (
    <div className="logo fade-enter-done" tabindex="-1">
      {/* <a href="/" aria-label="home"> */}

      <div className="bg-container">
        <svg
          id="hex"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          viewBox="0 0 84 96"
        >
          <title>Hexagon</title>
          <g transform="translate(-8.000000, -2.000000)">
            <g transform="translate(11.000000, 5.000000)">
              <polygon
                stroke="#64ffda"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
                points="39 0 0 22 0 67 39 90 78 68 78 23"
                fill="#64ffda"
              ></polygon>
            </g>
          </g>
        </svg>
      </div>

      <div className="logo-container">
        <span className="letter">I</span>
        <svg
          id="logo"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          viewBox="0 0 84 96"
        >
          <title>Logo</title>
          <g transform="translate(-8.000000, -2.000000)">
            <g transform="translate(11.000000, 5.000000)">
              <polygon
                id="Shape"
                stroke="#64ffda"
                stroke-width="5"
                stroke-linecap="round"
                stroke-linejoin="round"
                points="39 0 0 22 0 67 39 90 78 68 78 23"
              ></polygon>
              {/* <path
                d="M45.691667,45.15 C48.591667,46.1 50.691667,48.95 50.691667,52.2 C50.691667,57.95 46.691667,61 40.291667,61 L28.541667,61 L28.541667,30.3 L39.291667,30.3 C45.691667,30.3 49.691667,33.15 49.691667,38.65 C49.691667,41.95 47.941667,44.35 45.691667,45.15 Z M33.591667,43.2 L39.241667,43.2 C42.791667,43.2 44.691667,41.85 44.691667,38.95 C44.691667,36.05 42.791667,34.8 39.241667,34.8 L33.591667,34.8 L33.591667,43.2 Z M33.591667,47.5 L33.591667,56.5 L40.191667,56.5 C43.691667,56.5 45.591667,54.75 45.591667,52 C45.591667,49.2 43.691667,47.5 40.191667,47.5 L33.591667,47.5 Z"
                fill="currentColor"
              ></path> */}
              {/* <div>I</div> */}
              {/* <circle cx="255.999" cy="75.469" r="75.469" />
              <path
                d="M359.345,230.952v-45.874H152.654v45.874c15.395,0,27.874,12.479,27.874,27.873v179.426
		c0,15.394-12.48,27.874-27.874,27.874V512h206.692v-45.873c-15.395,0-27.874-12.48-27.874-27.874V258.825
		C331.471,243.431,343.951,230.952,359.345,230.952z"
              /> */}
            </g>
          </g>
        </svg>
      </div>
      {/* </a> */}
    </div>
  );
}
