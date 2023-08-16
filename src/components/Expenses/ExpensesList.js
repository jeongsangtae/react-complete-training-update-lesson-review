import React from "react";

import ExpenseItem from "./ExpenseItem";
import "./ExpensesList.css";

const ExpensesList = (props) => {
  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">비용 데이터 없음</h2>;
  }

  return (
    <ul className="expenses-list">
      {props.items.map((expensesData) => (
        <ExpenseItem
          key={expensesData.id}
          title={expensesData.title}
          price={expensesData.price}
          date={expensesData.date}
        />
      ))}
    </ul>
  );
};

export default ExpensesList;
