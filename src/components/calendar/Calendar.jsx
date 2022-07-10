import styles from "./Calendar.module.css";
import { useParams } from "react-router-dom";
import getDay from "date-fns/getDay";
import { getDecrementedMonth, getDayName } from "../../utils";
import getDaysInMonth from "date-fns/getDaysInMonth";
import { useState, useEffect } from "react";

const Calendar = () => {
  const { year, month } = useParams();
  const [dateArray, setDateArray] = useState([]);
  const firstDayOfMonth = getDay(new Date(year, month - 1, 1));
  const { year: previousYear, month: previousMonth } = getDecrementedMonth(
    year,
    month
  );

  const numOfDaysInPrevMonth = getDaysInMonth(
    new Date(previousYear, previousMonth - 1)
  );

  const numberOfDaysInCurrMonth = getDaysInMonth(new Date(year, month - 1));
  const numberOfPrevMonthDaysToInclude = firstDayOfMonth;
  let startingOfPrevMonth =
    numOfDaysInPrevMonth - numberOfPrevMonthDaysToInclude + 1;
  let currDayPointer = 1;
  let nextMonthPointer = 1;

  const temp = [];
  useEffect(() => {
    for (let i = 0; i < 42; i++) {
      const dateObj = {
        dayName: i < 7 ? getDayName(i) : null,
        dayNumber: 0,
        currentMonthDay: false,
      };

      if (currDayPointer > numberOfDaysInCurrMonth && i % 7 === 0) {
        break;
      }

      if (i < numberOfPrevMonthDaysToInclude) {
        //these are days from prev month
        dateObj.dayNumber = startingOfPrevMonth;
        startingOfPrevMonth++;
      } else if (
        //these are current month days
        i > numberOfPrevMonthDaysToInclude - 1 &&
        i < numberOfPrevMonthDaysToInclude + numberOfDaysInCurrMonth
      ) {
        dateObj.dayNumber = currDayPointer;
        dateObj.currentMonthDay = true;
        currDayPointer++;
      } else {
        //these are next month days
        dateObj.dayNumber = nextMonthPointer;
        nextMonthPointer++;
      }

      temp.push(dateObj);
    }
    setDateArray(temp);
  }, [year, month]);

  if (
    Number(month) <= 12 &&
    Number(month) > 0 &&
    Number(year) > 1970 &&
    Number(year) < 2500
  ) {
    return (
      <section className={styles.calendarContainer}>
        <div className={styles.calendarGrid}>
          {dateArray.map((dateObj, index) => (
            <CalendarCell key={index} dateObj={dateObj} />
          ))}
        </div>
      </section>
    );
  } else {
    return <div>{`Enter a valid date range(1970-2500)`}</div>;
  }
};

const CalendarCell = ({ dateObj }) => {
  return (
    <div className={styles.calendarCell}>
      <span className={styles.dayName}>{dateObj.dayName}</span>
      <span className={!dateObj.currentMonthDay ? styles.inactiveDay : null}>
        {dateObj.dayNumber}
      </span>
    </div>
  );
};
export { Calendar };
