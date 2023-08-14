import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2023");

  const filterExpenseDate = (filterData) => {
    setFilterYear(filterData);
    console.log(filterData);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        onFilterExpenseData={filterExpenseDate}
        selectYear={filterYear}
      />
      <ExpenseItem
        title={props.items[0].title}
        price={props.items[0].price}
        date={props.items[0].date}
      />
      <ExpenseItem
        title={props.items[1].title}
        price={props.items[1].price}
        date={props.items[1].date}
      />
      <ExpenseItem
        title={props.items[2].title}
        price={props.items[2].price}
        date={props.items[2].date}
      />
      <ExpenseItem
        title={props.items[3].title}
        price={props.items[3].price}
        date={props.items[3].date}
      />
    </Card>
  );
};

export default Expenses;
