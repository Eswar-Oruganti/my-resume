import { Dialog, DialogPanel } from "@headlessui/react";
import { useState } from "react";
import styles from "./ThemeSwitcher.module.css";

export default function ThemeSwitcher() {
  let [isOpen, setIsOpen] = useState(false);

  const handleThemeChange = (theme) => {
    let htmlElement = document.documentElement;
    localStorage.setItem("theme", theme);
    setIsOpen(false);
    setTimeout(() => {
      if (theme === "blue") {
        htmlElement.setAttribute("data-theme", "blue");
      } else {
        htmlElement.removeAttribute("data-theme");
      }
    }, 500);
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
            <div className={styles.ThemeSelector}>
              <button onClick={() => handleThemeChange("base")}>Base </button>
              <button onClick={() => handleThemeChange("blue")}>Blue</button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </>
  );
}
