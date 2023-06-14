import { useEffect, useState } from "react";
import AboutMe from "./components/AboutMe";
import Email from "./components/Email";
import GetInTouch from "./components/GetInTouch";
import Hero from "./components/Hero";
import MobileNav from "./components/MobileNav";
import Projects from "./components/Projects";
import Socials from "./components/Socials";
import Topbar from "./components/Topbar";
import Work from "./components/Work";

function App() {
  const [isMenu, setIsMenu] = useState(false);
  useEffect(() => {
    isMenu
      ? (document.querySelector("body").style.overflow = "hidden")
      : (document.querySelector("body").style.overflow = "visible");
  }, [isMenu]);
  return (
    <div className={isMenu ? "app menu" : "app"}>
      <MobileNav isMenu={isMenu} setIsMenu={setIsMenu} />
      {isMenu && <div className="blur" onClick={() => setIsMenu(false)}></div>}
      <div className="app-container">
        <Topbar isMenu={isMenu} setIsMenu={setIsMenu} />
        <Hero />
        <Email />
        <Socials />
        <AboutMe />
        <Work />
        <Projects />
        <GetInTouch />
      </div>
    </div>
  );
}

export default App;
