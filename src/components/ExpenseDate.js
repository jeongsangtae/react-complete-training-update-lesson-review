import React from "react";

import "./ExpenseDate.css";

const ExpnseDate = (props) => {
  const year = props.date.getFullYear();
  const month = props.date.getMonth() + 1;
  const day = props.date.getDate();

  return (
    <div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};

export default ExpnseDate;
