import "./ExpenseItem.css";
function ExpenseItem() {
  const expenseDate = new Date(2021, 2, 28);
  const expenseTitle = "Car Insurance";
  const expenseAmount = 294.67;

  return (
    <div>
        <div className="expense-item">
            <h2>{expenseDate.toDateString()}</h2>
        <div className="expense-item__description">
            <h2 >{expenseTitle}</h2>
            <div className="expense-item__price">${expenseAmount}</div>
        </div>
        </div>

      <div>{expenseTitle}</div>
      <div>{expenseDate.toISOString()}</div>
    </div>
  );
}

export default ExpenseItem;
