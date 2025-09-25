import { useEffect } from "react";

import Contact from "./components/Contact";
import Experience from "./components/Experience";
import ProfileCard from "./components/ProfileCard";
import SlideIn from "./components/SlideIn/Slidein";
import ThemeSwitcher from "./components/ThemeSwitcher";
import "./App.css";

function App() {
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const htmlElement = document.documentElement;

    if (savedTheme === "blue") {
      htmlElement.setAttribute("data-theme", "blue");
    } else {
      htmlElement.removeAttribute("data-theme");
    }
  }, []);
  return (
    <>
      <SlideIn>
        <div className="container">
          <ProfileCard />
          <div className="details">
            <Experience />
            <Contact />
          </div>
        </div>
      </SlideIn>
      <ThemeSwitcher />
    </>
  );
}

export default App;
