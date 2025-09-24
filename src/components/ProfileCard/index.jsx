import Card from "../Card";
import styles from "./ProfileCard.module.css";

export default function ProfileCard() {
  return (
    <Card className={styles.profileCard}>
      <h1 className={styles.profileName}>Eswar Oruganti</h1>
      <div className={styles.profileFooter}>
        <a
          href="/Resume_Eswar_Oruganti.pdf"
          download="Eswar_Oruganti_Resume"
          className={styles.downloadResumeLink}
        >
          Download CV
        </a>
        <button className={styles.contactButton}>Contact Me</button>
      </div>
    </Card>
  );
}
