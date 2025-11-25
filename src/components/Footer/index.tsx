import { RouterLink } from "../RouterLink";
import styles from "./styles.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <RouterLink href="/about-pomodoro/">
        Understand how the Pomodoro Technique works
      </RouterLink>
      <RouterLink href="/">
        Chronos Pomodoro &copy; {new Date().getFullYear()}
      </RouterLink>
    </footer>
  );
}

export default Footer;
