import React, { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    price: 10000,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", price: 799000, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    price: 294000,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    price: 450000,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expensesData, setExpensesData] = useState(expenses);

  const addExpenseData = (saveExpenseData) => {
    console.log(saveExpenseData);
    setExpensesData((prevExpensesData) => {
      return [saveExpenseData, ...prevExpensesData];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseData} />
      <Expenses items={expensesData} />
    </div>
  );
};

export default App;
