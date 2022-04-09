import "./ExpenseForm.css";
import { useState } from "react";

const ExpenseForm = (props) => {
  const [enteredPrice, setEnteredPrice] = useState("");
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredDate, setEntereredDate] = useState("");
  // const [userInput, setUserInput] = useState({
  //   enteredTitle: "",
  //   enteredAmount: "",
  //   enteredDate: "",
  // });
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });
    // setUserInput((prevState) => {
    //   return { ...prevState, enteredTitle: event.target.value };
    // });
  };

  const priceChangeHandler = (e) => {
    setEnteredPrice(e.target.value);
    // setUserInput({
    //   ...userInput,
    //   enteredAmount: e.target.value,
    // });
  };

  const dateChangeHandler = (e) => {
    setEntereredDate(e.target.value);
    // setUserInput({ ...userInput, enteredDate: e.target.value });
  };

  const resetHandler = (e) => {
    props.onSaveExpenseData();
  };

  const submitHandler = (e) => {
    console.log(e);
    e.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredPrice,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredPrice("");
    setEntereredDate("");
  };

  return (
    <form onSubmit={submitHandler} onReset={resetHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={enteredTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={enteredPrice}
            onChange={priceChangeHandler}
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            value={enteredDate}
            onChange={dateChangeHandler}
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="reset" className="cancel">
          Cancel
        </button>
        <button type="submit" className="addExpense">
          Add Expense
        </button>
      </div>
    </form>
  );
};

export default ExpenseForm;
