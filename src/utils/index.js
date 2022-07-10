export function getIncrementedMonth(year, month) {
  if (Number(month) === 12) {
    return { year: Number(year) + 1, month: 1 };
  }
  return { year: Number(year), month: Number(month) + 1 };
}
export function getDecrementedMonth(year, month) {
  if (Number(month) === 1) {
    return { year: Number(year) - 1, month: 12 };
  }
  return { year: Number(year), month: Number(month) - 1 };
}

export function getMonthName(month) {
  const monthArray = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];
  return monthArray[Number(month) - 1];
}

export function getDayName(day) {
  const dayArray = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  return(dayArray[day]);
}
