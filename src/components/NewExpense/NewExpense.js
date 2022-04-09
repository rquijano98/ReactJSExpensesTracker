import { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [inputOpen, setInputOpen] = useState(false);

  const openForm = function () {
    setInputOpen(true);
  };

  const saveExpenseDataHandler = (enteredExpenseData) => {
    if (enteredExpenseData) {
      const expenseData = {
        ...enteredExpenseData,
        id: Math.random().toString(),
      };
      props.onAddExpense(expenseData);
    }

    setInputOpen(false);
  };

  return (
    <div className="new-expense">
      {inputOpen ? (
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
      ) : (
        <button onClick={openForm}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
