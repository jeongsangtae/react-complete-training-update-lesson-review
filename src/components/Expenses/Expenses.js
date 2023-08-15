import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2023");

  // 파생/계산된 상태 사용
  // let filterInfoText = "2020, 2021 & 2022";

  // if (filterYear === "2020") {
  //   filterInfoText = "2021, 2022 & 2023";
  // } else if (filterYear === "2021") {
  //   filterInfoText = "2020, 2022 & 2023";
  // } else if (filterYear === "2022") {
  //   filterInfoText = "2020, 2021 & 2023";
  // }

  const filterExpenseDate = (filterData) => {
    setFilterYear(filterData);
    console.log(filterData);
  };

  const selectedExpenseYear = props.items.filter(
    (expensesData) => expensesData.date.getFullYear().toString() === filterYear
  );

  let expensesContent = <p>비용 데이터 없음</p>;

  if (selectedExpenseYear.length > 0) {
    expensesContent = selectedExpenseYear.map((expensesData) => (
      <ExpenseItem
        key={expensesData.id}
        title={expensesData.title}
        price={expensesData.price}
        date={expensesData.date}
      />
    ));
  }

  return (
    <Card className="expenses">
      <ExpensesFilter
        onFilterExpenseData={filterExpenseDate}
        selectYear={filterYear}
      />
      {/* 파생/계산된 상태의 결과 값를 보여주는 p태그 */}
      {/* <p>Data for years {filterInfoText} is hidden.</p> */}
      {expensesContent}
    </Card>
  );
};

export default Expenses;
