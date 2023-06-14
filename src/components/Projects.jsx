import React from "react";

export default function Projects() {
  const pattern =
    /(\bvue3\b)|(\breact\b)|(\bnode\b)|(\bexpress\b)|(\btailwind\b)|(\bfirebase\b)|(\bmongodb\b)|(\bmongoatlas\b)/gi; // Words that I want to be seen as links.
  const projects = [
    {
      name: "Spotify Clone",
      desc: "MuseUp is a Vue3 and Vuex-based app similar to Spotify, allowing users to build, share, and follow song playlists. Powered by Node.js, Express, MongoDB, and Socket.io, MuseUp provides a seamless music streaming experience with real-time updates and an intuitive interface.",
      techs: ["Vue3", "Express", "MongoDB", "Socket.io"],
      img: "https://repository-images.githubusercontent.com/575617650/d5019ef7-030d-4310-ab9e-aeb0e6927492",
      link: "https://muse-up.onrender.com/#/",
    },
    {
      name: "Netflix Clone",
      desc: "Experience a responsive Netflix clone app meticulously crafted in React, utilizing Tailwind CSS and Firebase. Where users can sign up, add movies to their Liked Movies list, search for movies, access detailed information on the Movie Details page, and watch trailers retrieved through Youtube's API. Discover a seamless streaming experience with this self-learned project.",
      techs: ["React", "firebase", "Tailwind"],
      img: "https://user-images.githubusercontent.com/114099366/219020355-ca1882b8-94c8-40fa-b48e-9eced6a9aa73.png",
      link: "https://social-media-app-dw48.onrender.com/#/",
    },
    {
      name: "Social Media App",
      desc: "Discover a responsive full-stack social media app, built with React.js, mongoAtlas, Express.js, and Socket.io. Explore posts feed, user profiles, a messenger app, live notifications, image uploader, and more. Connect with friends, upload posts, like and comment on updates, search for new connections, and send direct messages. Experience a dynamic social media platform with seamless functionality and engaging features.",
      techs: ["VS Code", "React", "Node.js"],
      img: "https://user-images.githubusercontent.com/114099366/226100693-3bbbec9f-0600-4566-819e-dfbc30229099.png",
      link: "https://ilankhmel.github.io/Netflix-Clone-React/",
    },
  ];
  return (
    <div className="projects" id="Projects">
      <h2>
        <span className="blue-code">03.</span> Some Things I've Built
      </h2>

      {projects.map((p, idx) => (
        <a
          className={idx % 2 === 0 ? "project-card even" : "project-card odd"}
          href={p.link}
          target="_blank"
        >
          <div className="details">
            <h3>Featured Project</h3>
            <h2>{p.name}</h2>
            <p>
              {p.desc.split(pattern).map((word, i) => {
                if (pattern.test(word)) {
                  return (
                    <a key={i} href="#">
                      {word}
                    </a>
                  );
                }
                return word;
              })}
            </p>

            <ul>
              {p.techs.map((t) => (
                <li>{t}</li>
              ))}
            </ul>
          </div>

          <div className="image">
            <img src={p.img} alt="" />
          </div>
        </a>
      ))}
    </div>
  );
}
