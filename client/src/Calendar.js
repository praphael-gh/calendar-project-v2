import React, { useState } from "react";
import "./Calendar.css"
import {
  format,
  startOfWeek,
  addDays,
  startOfMonth,
  endOfMonth,
  endOfWeek,
  isSameMonth,
  isSameDay,
  subMonths,
  addMonths
} from "date-fns";

// hello there

import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";

const Calendar = ({setSelectedDate, selectedDate, setEventList}) => {
  // const [selectedDate, setSelectedDate] = useState(new Date());
  const [activeDate, setActiveDate] = useState(new Date());

  // console.log(activeDate.toLocaleDateString("en-US"),
  //           selectedDate.toLocaleDateString("en-US"))

  const getHeader = () => {
    return (
      <div className="header">
        <div key='today-button'
          className="todayButton"
          onClick={() => {
            setSelectedDate(new Date());
            setActiveDate(new Date());
            
          }}
        >
          Today
        </div>
        <AiOutlineLeft key='left'
          className="navIcon"
          onClick={() => setActiveDate(subMonths(activeDate, 1))}
        />
        <AiOutlineRight key='right'
          className="navIcon"
          onClick={() => setActiveDate(addMonths(activeDate, 1))}
        />
        <h2 key='month' className="currentMonth">{format(activeDate, "MMMM yyyy")}</h2>
      </div>
    );
  };

  const getWeekDaysNames = () => {
    const weekStartDate = startOfWeek(activeDate);
    const weekDays = [];
    for (let day = 0; day < 7; day++) {
      weekDays.push(
        <div key={day} className="day weekNames">
          {format(addDays(weekStartDate, day), "E")}
        </div>
      );
    }
    return <div className="weekContainer">{weekDays}</div>;
  };

  const generateDatesForCurrentWeek = (date, selectedDate, activeDate) => {
    let currentDate = date;
    const week = [];
    for (let day = 0; day < 7; day++) {
      const cloneDate = currentDate;
      week.push(
        <div 
          className={`day ${
            isSameMonth(currentDate, activeDate) ? "" : "inactiveDay"
          } ${isSameDay(currentDate, selectedDate) ? "selectedDay" : ""}
          ${isSameDay(currentDate, new Date()) ? "today" : ""}`}
          onClick={() => {
            setEventList([])
            setSelectedDate(cloneDate);
          }}
        >
          {format(currentDate, "d")}
        </div>
      );
      currentDate = addDays(currentDate, 1);
    }
    
    return <React.Fragment key={date}>{week}</React.Fragment>;
  };

  const getDates = () => {
    const startOfTheSelectedMonth = startOfMonth(activeDate);
    const endOfTheSelectedMonth = endOfMonth(activeDate);
    const startDate = startOfWeek(startOfTheSelectedMonth);
    const endDate = endOfWeek(endOfTheSelectedMonth);

    let currentDate = startDate;

    const allWeeks = [];

    while (currentDate <= endDate) {
      allWeeks.push(
        generateDatesForCurrentWeek(currentDate, selectedDate, activeDate)
      );
      currentDate = addDays(currentDate, 7);
    }

    return <div key='' className="weekContainer">{allWeeks}</div>;
  };

  return (
    <section>
      {getHeader()}
      {getWeekDaysNames()}
      {getDates()}
    </section>
  );
};

export default Calendar;