import React, { useEffect } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
export default function Socials() {
  const socials = [
    {
      url: "https://github.com/ilankhmel",
      icon: GitHubIcon,
    },
    {
      url: "https://linkedin.com/in/ilankhmel",
      icon: LinkedInIcon,
    },
    {
      url: "https://instagram.com/ilan.khmel",
      icon: InstagramIcon,
    },
  ];

  return (
    <div className="socials full">
      {socials.map((s, idx) => (
        <a href={s.url} className="social" target="_blank">
          {React.createElement(s.icon)}
        </a>
      ))}
    </div>
  );
}
