import Contact from "./Contact/contact";
import Hobbies from "./Hobbies/hobbies";
import Languages from "./Languages/languages";
import Name from "./Name/name";
import styles from "./page.module.css";
import Profile from "./Profile/profile";
import Projects from "./Projects/projects";
import Skills from "./Skills/skills";
import Studies from "./Studies/studies";
import Xp from "./Xp/xp";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.aside}>
        <Name />
        <Contact />
        <Skills />
        <Languages />
        <Hobbies />
      </div>
      <div className={styles.main}>
        <Profile />
        <Xp />
        <Projects />
        <Studies />
      </div>
    </div>
  );
}
