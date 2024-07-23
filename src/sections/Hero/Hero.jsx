import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import leetcodeLight from '../../assets/leetcodelight.svg';
import leetcodeDark from '../../assets/leetcodedark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const leetcodeIcon = theme === 'light' ? leetcodeLight : leetcodeDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Harris Johnsen"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Sakshi
          <br />
          Gupta
        </h1>
        <h2>Full-Stack Developer</h2>
        <span>
          <a href="https://leetcode.com/u/sakshigupta19/" target="_blank">
            <img src={leetcodeIcon} alt="Twitter icon" />
          </a>
          <a href="https://github.com/sakshiigupta19" target="_blank">
            <img src={githubIcon} alt="Github icon" />
          </a>
          <a href="https://www.linkedin.com/in/sakshi-gupta-59664921b/" target="_blank">
            <img src={linkedinIcon} alt="Linkedin icon" />
          </a>
        </span>
        <p className={styles.description}>
        I am a versatile full-stack developer skilled in both front-end and back-end technologies, including JavaScript,Django, and MERN. I excel at crafting dynamic, responsive, and scalable web applications.
         </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
