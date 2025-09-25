import Card from "../Card";
import SlideIn from "../SlideIn/Slidein";
import styles from "./Experience.module.css";
const experienceDetails = [
  {
    id: 2,
    company: "Assetly",
    startYear: 2023,
    endYear: 2025,
    title: "Frontend Engineer",
    description:
      "Built scalable, reusable frontend architectures, delivered multiple pixel-perfect, accessible pages, and created component libraries with React, TypeScript, Storybook, and AWS integrations, powering multiple projects.",
  },
  {
    id: 1,
    company: "TCS",
    startYear: 2021,
    endYear: 2023,
    title: "Associate Software Engineer",
    description:
      "Developed the frontend of an inventory management app, creating interactive dashboards with charts and data visualizations using React.",
  },
];

export default function Experience() {
  return (
    <div>
      <h6 className="h-level-2">Experience</h6>
      <div className={styles.cardContainer}>
        {experienceDetails.map((item) => (
          <ExperienceCard {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

const ExperienceCard = (props) => {
  const { startYear, endYear, description, company, title } = props;
  return (
    <SlideIn>
      <Card>
        <div className={styles.cardHeader}>
          <div>
            <p className={styles.cardTitle}>{title}</p>
            <p className={styles.cardCompany}>{company}</p>
          </div>

          <Card className={styles.jobDurationCard}>
            {startYear} - {endYear}
          </Card>
        </div>
        <div></div>
        <div className={styles.cardDesc}>
          <p>{description}</p>
        </div>
      </Card>
    </SlideIn>
  );
};
