import React from "react";

import Expenses from "./components/Expenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 10000,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "New TV", amount: 799000, date: new Date(2021, 2, 12) },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294000,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450000,
      date: new Date(2021, 5, 12),
    },
  ];

  return <Expenses items={expenses} />;
};

export default App;
