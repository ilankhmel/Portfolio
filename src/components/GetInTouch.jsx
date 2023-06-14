import React from "react";

export default function GetInTouch() {
  return (
    <div className="get-in-touch" id="Contact">
      <span className="blue-code">04.What's Next?</span>
      <h2>Get In Touch</h2>
      <p>
        Although I’m not currently looking for any new opportunities, my inbox
        is always open. Whether you have a question or just want to say hi, I’ll
        try my best to get back to you!
      </p>
      <div className="btn-bg">
        <a
          href="mailto:ilankhmel@gmail.com?subject=Hey there Ilan!"
          target="_blank"
        >
          <button className="btn">Say Hello</button>
        </a>
      </div>
    </div>
  );
}
