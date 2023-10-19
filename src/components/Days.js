import React, { useState } from "react";
import ForecastDay from "./ForecastDay";

const Days = ({ forecastdata }) => {
  let timeEntries = [];
  let nextFiveDaysEntries = [];

  const [showAll, setShowAll] = useState(false);

  if (forecastdata && forecastdata.list) {
    timeEntries = forecastdata.list.filter((item) => {
      const [, timePart] = item.dt_txt.split(" ");
      return timePart === "09:00:00";
    });
  }

  if (forecastdata && forecastdata.list) {
    const currentDate = new Date();
    const daysOfWeek = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const nextDate = new Date(currentDate);

    for (let i = 1; i <= (showAll ? 5 : 3); i++) {
      nextDate.setDate(currentDate.getDate() + i);

      const nextDayName = daysOfWeek[nextDate.getDay()];
      const nextDay = nextDate.toISOString().split("T")[0];

      const dayEntries = forecastdata.list.filter((item) => {
        const [datePart] = item.dt_txt.split(" ");
        return datePart === nextDay;
      });

      if (dayEntries.length > 0) {
        nextFiveDaysEntries.push({ dayName: nextDayName, entries: dayEntries });
      }
    }
  }

  const toggleShowAll = () => {
    setShowAll(!showAll);
  };
  const renderDays = () => {
    const daysToRender = showAll ? nextFiveDaysEntries : nextFiveDaysEntries.slice(0, 3);
    const rows = [];

    for (let i = 0; i < daysToRender.length; i += 2) {
      const row = (
        <div className="flex" key={i}>
          <ForecastDay day={daysToRender[i]} index={i} />
          {i + 1 < daysToRender.length && (
            <ForecastDay day={daysToRender[i + 1]} index={i + 1} />
          )}
        </div>
      );
      rows.push(row);
    }

    return rows;
  };



  return (
    <>
      {renderDays()}
      <button className="black_btn mb-10 mt-10 justify-center items-center mx-auto" onClick={toggleShowAll}>
        {showAll ? "Show Limited" : "Show All Days"}
      </button>
    </>
  );
};

export default Days;
