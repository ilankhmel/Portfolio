import React, { useEffect, useState } from "react";

export default function Work() {
  const workPlaces = [
    {
      tabName: "Army",
      headline: "Platoon Sergeant at Givati brigade",
      date: "2016 - 2019",
      points: [
        "Served as a combat soldier in the Givati Brigade at Hebron.",
        "Selected to attend the commanders course, gaining valuable experience in leadership and decision-making under real pressure in the field.",
        "Commanded a 12-soldier class within the platoon, stationed at the Gaza Strip border.",
        "Promoted to the role of Platoon Sergeant, responsible for training and commanding over 40 newly enlisted soldiers, preparing them to become combat-ready soldiers in the brigade.",
        "Promoted to Company Sergeant Major, commanding approximately 100 soldiers within the company and overseeing internal company tasks.",
      ],
    },
    {
      tabName: "Isrotel",
      headline: "Concierge at Isrotel Hotel Chain",
      date: "2016 - 2019",
      points: [
        "Consistently provided excellent customer service to hotel guests, ensuring a positive and memorable experience.",
        "Demonstrated strong communication skills in English, effectively engaging with guests on a daily basis to address their needs and inquiries.",
        "Successfully utilized sales techniques to promote hotel services and amenities, contributing to increased revenue and guest satisfaction.",
        "Maintained positive and professional interpersonal relationships with both guests and colleagues, fostering a collaborative and welcoming atmosphere at Isrotel Dead Sea.",
      ],
    },
    {
      tabName: "SmartWeb",
      headline: "Marketing specialist as SmartWeb",
      date: "2022 - 2022",
      points: [
        "Managed PPC campaigns  for customers.",
        "SEO adjustments and content writing work on customer’s websites.",
        "Managed social media marketing content for customers.",
      ],
    },
    {
      tabName: "Bootcamp",
      headline: "'CodingAcademy' bootcamp student",
      date: "2022 - 2023",
      points: [
        "MVC Frameworks and Single Page Applications using React, Vue.js, Angular, and server-side programming with Node.js.",
        "Proficient in HTML, CSS, SASS, modern JavaScript, and Object-Oriented Programming principles for visually appealing web design.",
        "Experience in database management, integrating MySQL and MongoDB, along with TypeScript, Express.js, Redux, WebSockets, and RxJS for scalable application development.",
      ],
    },
  ];

  const [active, setActive] = useState(1);
  const [desc, setDesc] = useState(workPlaces[active]);
  const [screen, setScreen] = useState(null);

  useEffect(() => {
    setDesc(workPlaces[active]);
  }, [active]);

  useEffect(() => {
    window.innerWidth < 950 ? setScreen("mobile") : setScreen("desktop");
  }, [window.innerWidth]);

  return (
    <div className="work" id="Work">
      <div className="content">
        <h2>
          <span className="blue-code">02.</span> Experience
        </h2>
        <div className="main">
          <div className="tab-container">
            {workPlaces.map((wp, idx) => (
              <button
                className={active === idx ? "tab active" : "tab"}
                onClick={() => setActive(idx)}
              >
                {wp.tabName}
              </button>
            ))}
            <div
              className="tab-highlight"
              style={
                screen === "mobile"
                  ? { transform: "translate(" + 100 * active + "%, 0%)" }
                  : { transform: "translate(0%, " + 100 * active + "%)" }
              }
            ></div>
          </div>
          <div className="desc">
            <h3 className="desc-headline">{desc.headline}</h3>
            <h4 className="desc-date">{desc.date}</h4>
            <ul className="desc-list">
              {desc.points.map((p) => (
                <li className="desc-point">{p}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
