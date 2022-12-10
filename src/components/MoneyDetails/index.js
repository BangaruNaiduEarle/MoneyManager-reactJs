/* eslint-disable react/no-unknown-property */
// Write your code here

import './index.css'

const MoneyDetails = props => {
  const {totalIncome, totalExpenses, Balance} = props

  return (
    <div className="moneyDetailsContainer">
      <div className="balanceContainer container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="Image"
          />
        </div>

        <div>
          <p>Your Balance</p>
          <p testid="balanceAmount">Rs {Balance}</p>
        </div>
      </div>

      <div className="incomeContainer container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
            className="Image"
          />
        </div>
        <div>
          <p>Your Income</p>
          <p testid="incomeAmount">Rs {totalIncome}</p>
        </div>
      </div>

      <div className="expensesContainer container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
            className="Image"
          />
        </div>
        <div>
          <p>Your Expenses</p>
          <p testid="expensesAmount">Rs {totalExpenses}</p>
        </div>
      </div>
    </div>
  )
}

export default MoneyDetails
