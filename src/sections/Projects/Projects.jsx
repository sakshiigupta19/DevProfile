import styles from './ProjectsStyles.module.css';
import todo from '../../assets/todo.png';
import portfolio from '../../assets/portfolio.png';
import hospitalbooking from '../../assets/hospital.png';
import ecomm from '../../assets/ecomm.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={todo}
          link="https://github.com/sakshiigupta19/To-Do-List"
          h3="Priority Pluse"
          p="To-do List"
        />
        <ProjectCard
          src={portfolio}
          link="https://github.com/sakshiigupta19/Portfolio"
          h3="DevProfile"
          p="Portfolio site"
        />
        <ProjectCard
          src={hospitalbooking}
          link=""
          h3="MedNow"
          p="Doc Appt.Booking(MERN)"
        />
        <ProjectCard
          src={ecomm}
          link=""
          h3="E-commerce"
          p="Django"
        />
      </div>
    </section>
  );
}

export default Projects;
