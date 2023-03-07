import React from "react";

const DatePublished = ({ date }) => {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const getPosition_T = date && date.indexOf("T");
  const newDate = date && date.substring(0, getPosition_T);
  const getYear = newDate && newDate.substring(0, 4);
  const getMonth = newDate && newDate.substring(5, 7);
  const getDay = newDate && newDate.substring(8, 10);
  return <>{months[getMonth - 1] + " " + getDay + ", " + " " + getYear}</>;
};

export default DatePublished;
