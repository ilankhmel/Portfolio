import React from "react";

export default function AboutMe() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Vue",
    "Node.js",
    "Express.js",
    "MongoDB",
    "WebSockets",
  ];

  return (
    <div className="about-me" id="About">
      <h2>
        <span className="blue-code">01.</span> About Me
      </h2>
      <div className="wrapper">
        <div className="info">
          <p>
            Hello! My name is Ilan and I enjoy creating things that live on the
            internet. My journey into coding as a marketing specialist stemmed
            from the desire to deliver outstanding results for clients. By
            leveraging HTML, CSS, and implementing tracking codes, I was able to
            improve website performance, enhance user engagement, and provide
            valuable insights to guide marketing strategies. I learned that
            coding is so much fun!
          </p>

          <p>
            In the present day, I have successfully completed an intensive and
            rigorous 4-month full-stack development bootcamp at{" "}
            <a href=""> CodingAcademy.</a> This comprehensive program demanded
            my commitment five days a week, from morning till night, providing
            me with a deep understanding of various aspects of full-stack
            development.
          </p>

          <p>
            Here are a few <a href=""> technologies</a> I’ve been working with
            recently:
          </p>

          <ul>
            {skills.map((s) => (
              <li>{s}</li>
            ))}
          </ul>
        </div>

        <div className="image-container">
          <div className="img-bg"></div>
          <img
            className="profile-pic"
            src={require("../styles/images/profile.jpg")}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
