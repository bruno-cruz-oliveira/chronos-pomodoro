import {
  HistoryIcon,
  HouseIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from "lucide-react";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { RouterLink } from "../RouterLink";

type AvailableThemes = "dark" | "light";

function Menu() {
  const [theme, setTheme] = useState<AvailableThemes>(() => {
    const storageTheme =
      (localStorage.getItem("theme") as AvailableThemes) || "dark";
    return storageTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.preventDefault();

    setTheme(prevTheme => {
      const nextTheme = prevTheme == "dark" ? "light" : "dark";
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <nav className={styles.menu}>
      <RouterLink
        className={styles.menuLink}
        href="/"
        aria-label="Go to Home"
        title="Go to Home"
      >
        <HouseIcon />
      </RouterLink>
      <RouterLink
        className={styles.menuLink}
        href="/history/"
        aria-label="View History"
        title="View History"
      >
        <HistoryIcon />
      </RouterLink>
      <RouterLink
        className={styles.menuLink}
        href="/settings/"
        aria-label="Settings"
        title="Settings"
      >
        <SettingsIcon />
      </RouterLink>
      <a
        className={styles.menuLink}
        href="#"
        aria-label="Change Theme"
        title="Change Theme"
        onClick={handleThemeChange}
      >
        {nextThemeIcon[theme]}
      </a>
    </nav>
  );
}

export default Menu;
