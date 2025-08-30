import React from 'react'

function ExpenseDetails({ incomeAmount, expenseAmount }) {


  return (
    <div>
        <div>
            <p style={{fontSize:'20px'}}>Your Balance : ₹ { incomeAmount - expenseAmount}</p>
        </div>
        <div className='amounts-container'>
            Income:
            <span className='income-amount'>₹{incomeAmount}</span>

            Expense:
            <span className='expense-amount'>₹{expenseAmount}</span>
        </div>
    </div>
  )
}

export default ExpenseDetails