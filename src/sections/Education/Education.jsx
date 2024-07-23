import EducationCard from '../../common/EducationCard';
import styles from './EducationStyles.module.css';

const Education = () => {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Education</h1>
      <div className={styles.educationsContainer}>
    <EducationCard
        h3="DIT UNIVERSITY"
        h2="BTech[Computer Science]"
        p="CGPA-8.88"
    />
    <EducationCard
        h3="KRISHNA PUBLIC SCHOOL"
        h2="HSC[CBSE]"
        p="90.6%"
    />
     <EducationCard
        h3="SACRED HEART HIGH SCHOOL"
        h2="SSC[ICSE]"
        p="89.8%"
    />
      </div>
    </section>
  )
}

export default Education
