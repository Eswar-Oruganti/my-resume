import { Dialog, DialogPanel } from "@headlessui/react";
import { useState } from "react";
import styles from "./ThemeSwitcher.module.css";

import ThemeSwitcherCanvasThree from "../../three/ThemeSwitcherOrb";

export default function ThemeSwitcher() {
  let [isOpen, setIsOpen] = useState(false);

  const handleThemeChange = (theme) => {
    let htmlElement = document.documentElement;
    localStorage.setItem("theme", theme);
    htmlElement.setAttribute("data-theme", theme);
    setIsOpen(false);
  };

  return (
    <>
      <button className={styles.trigger} onClick={() => setIsOpen(true)}>
        Theme
      </button>
      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className={styles.DialogContainer}
      >
        <div className={styles.DialogContent}>
          <DialogPanel className="">
            <p>Select Theme</p>
            <div>
              <div
                className={styles.themeGroup}
                tabIndex={1}
                onClick={() => handleThemeChange("blue")}
              >
                <p>Cursed Technique - Blue</p>
                <ThemeSwitcherCanvasThree />
              </div>
              <div
                className={styles.themeGroup}
                tabIndex={1}
                onClick={() => handleThemeChange("red")}
              >
                <p>Curset Technique Reversal - Red</p>
                <ThemeSwitcherCanvasThree emissiveColor="#ff2b2b" />
              </div>
              <div
                className={styles.themeGroup}
                tabIndex={1}
                onClick={() => handleThemeChange("purple")}
              >
                <p>Hollow Purple</p>
                <ThemeSwitcherCanvasThree emissiveColor="#9b30ff" />
              </div>
            </div>
            <div className={styles.ThemeSelector}></div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
