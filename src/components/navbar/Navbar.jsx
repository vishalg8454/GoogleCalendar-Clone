import styles from "./Navbar.module.css";
import { useNavigate, useParams } from "react-router-dom";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import SettingsIcon from "@mui/icons-material/Settings";
import {
  getDecrementedMonth,
  getIncrementedMonth,
  getMonthName,
  getDayName
} from "../../utils";
import { useState,useEffect } from "react";

const Navbar = () => {
  const today = new Date();
  const todayDay = getDayName(today.getDay());
  const todayDate = today.getDate();
  const todayMonth = (today.getMonth()+1);
  const todayMonthName = getMonthName(today.getMonth() + 1);
  const todayYear = today.getFullYear();

  const navigate = useNavigate();
  const { year, month } = useParams();
  const [monthName, setMonthName] = useState(getMonthName(month));

  useEffect(() => {
    setMonthName(getMonthName(month));
  },[month]);

  const navigateToNextMonth = () => {
    const { year: incrementedYear, month: incrementedMonth } =
      getIncrementedMonth(year, month);
    navigate(`/${incrementedYear}/${incrementedMonth}`);
  };

  const navigateToPrevMonth = () => {
    const { year: decrementedYear, month: decrementedMonth } =
      getDecrementedMonth(year, month);
    navigate(`/${decrementedYear}/${decrementedMonth}`);
  };

  const navigateToCurrentMonth = () => {
    navigate(`/${todayYear}/${todayMonth}`);
  };

  return (
    <nav className={styles.nav}>
      <button
        title={`${todayDay}, ${todayMonthName} ${todayDate}`}
        className={styles.buttonBorder}
        onClick={navigateToCurrentMonth}
      >
        Today
      </button>

      <button
        title="Previous Month"
        className={styles.buttonStyleNone}
        onClick={navigateToPrevMonth}
      >
        <ChevronLeftIcon />
      </button>

      <button
        title="Next Month"
        className={styles.buttonStyleNone}
        onClick={navigateToNextMonth}
      >
        <ChevronRightIcon />
      </button>

      <span className={styles.currentDate}>{`${monthName} ${year}`}</span>
      <div className={styles.navEnd}>
        <button title="Search" className={styles.buttonStyleNone}>
          <SearchIcon />
        </button>

        <button  title = "Help" className={styles.buttonStyleNone}>
          <HelpOutlineOutlinedIcon />
        </button>

        <button title="Settings" className={styles.buttonStyleNone}>
          <SettingsIcon />
        </button>
      </div>
    </nav>
  );
};
export { Navbar };
