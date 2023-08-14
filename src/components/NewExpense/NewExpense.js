import React from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const saveExpenseData = (submitExpenseData) => {
    const expenseDate = {
      ...submitExpenseData,
      id: Math.random().toString(),
    };

    console.log(expenseDate);
    props.onAddExpense(expenseDate);
  };

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={saveExpenseData} />
    </div>
  );
};

export default NewExpense;
