import { useEffect, useState } from "react";
import { motion, useAnimate } from "framer-motion";

import Contact from "./components/Contact";
import Experience from "./components/Experience";
import ProfileCard from "./components/ProfileCard";
import SlideIn from "./components/SlideIn/Slidein";
import ThemeSwitcher from "./components/ThemeSwitcher";
import "./App.css";

function App() {
  useEffect(() => {
    const theme = localStorage.getItem("theme");
    const htmlElement = document.documentElement;

    if (theme) {
      htmlElement.setAttribute("data-theme", theme);
    } else {
      htmlElement.removeAttribute("data-theme");
    }
  }, []);
  return (
    <>
      <div className="container">
        <ProfileCard />
        <div className="details">
          <SlideIn>
            <Experience />
            <Contact />
          </SlideIn>
        </div>
      </div>

      <ThemeSwitcher />
    </>
  );
}

export default App;
