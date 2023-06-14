import React, { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    document
      .querySelector(".hero .btn-bg a")
      .addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
          behavior: "smooth",
        });
      });
  }, []);

  return (
    <div className="hero flex column">
      <p className="blue-code">Hi, my name is</p>
      <div className="main">
        <p className="name">Ilan Khmelnitsky.</p>
        <p className="main-desc">I build things for the web.</p>
      </div>
      <p className="desc">
        I’m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I’m focused on
        building accessible, and responsive apps, that you can check out{" "}
        <a href="https://github.com/ilankhmel" target="_blank" className="link">
          right here.
        </a>
      </p>
      <div className="btn-bg">
        <a href="#Projects">
          <button className="btn">Check out my projects!</button>
        </a>
      </div>
    </div>
  );
}
