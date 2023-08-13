import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    console.log(enteredTitle);
  };

  const priceChangeHandler = (event) => {
    setEnteredPrice(event.target.value);
    console.log(enteredPrice);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
    console.log(enteredDate);
  };

  // 독립적인 핸들러 함수를 여러 개 두는 것 대신에 사용하는 대안 : 공유 핸들러 함수
  // const inputChangeHandler = (identifier, value) => {
  //   if (identifier === "title") {
  //     setEnteredTitle(value);
  //   } else if (identifier === "price") {
  //     setEnteredPrice(value);
  //   } else {
  //     setEnteredDate(value);
  //   }
  // };

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} />
          {/* <input
            type="text"
            onChange={(event) => {
              inputChangeHandler("title", event.target.value);
            }}
          /> */}
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input type="number" onChange={priceChangeHandler} />
          {/* <input
            type="number"
            min="10"
            step="10"
            onChange={(event) => {
              inputChangeHandler("price", event.target.value);
            }}
          /> */}
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" onChange={dateChangeHandler} />
          {/* <input
            type="date"
            min="2021-01-01"
            max="2023-12-31"
            onChange={(event) => {
              inputChangeHandler("date", event.target.value);
            }}
          /> */}
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
