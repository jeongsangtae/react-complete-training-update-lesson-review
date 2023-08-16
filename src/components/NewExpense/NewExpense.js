import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [editForm, setEditForm] = useState(false);

  const saveExpenseData = (submitExpenseData) => {
    const expenseDate = {
      ...submitExpenseData,
      id: Math.random().toString(),
    };

    console.log(expenseDate);
    props.onAddExpense(expenseDate);
    setEditForm(false);
  };

  const startEditHandler = () => {
    setEditForm(true);
  };

  const stopEditHandler = () => {
    setEditForm(false);
  };

  return (
    <div className="new-expense">
      {!editForm && <button onClick={startEditHandler}>Add Expense</button>}
      {editForm && (
        <ExpenseForm
          onCancel={stopEditHandler}
          onSaveExpenseData={saveExpenseData}
        />
      )}
    </div>
  );
};

export default NewExpense;
