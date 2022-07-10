import styles from "./CalendarPage.module.css";
import { Navbar, Calendar } from "../../components";

const CalendarPage = () => {
  return (
    <div className={styles.pageGrid}>
      <Navbar />
      <Calendar />
    </div>
  );
};
export { CalendarPage };
