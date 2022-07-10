import styles from "./LandingPage.module.css";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const navigateToCalendar = () => {
    const today = new Date();
    const todayMonth = today.getMonth() + 1;
    const todayYear = today.getFullYear();
    navigate(`/${todayYear}/${todayMonth}`);
  };
  
  return (
    <main className={styles.pageContainer}>
      <h2 className={styles.textBig}>Minimal implementation of</h2>
      <h2 className={styles.textBrand}>Google Calendar</h2>
      <h2 className={styles.textBig}>in React.js</h2>
      <button className={styles.buttonCta} onClick={navigateToCalendar}>
        Go To Calendar
      </button>
    </main>
  );
};
export { LandingPage };
