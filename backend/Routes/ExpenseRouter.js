const { fetchExpenses, addExpenses, deleteExpenses } = require('../Controllers/ExpenseController');

const router = require('express').Router();


//fetch all the expenses of user based on user_id
router.get('/', fetchExpenses);
//add new expense for user based on user_id
router.post('/', addExpenses);
//delete an expense for user based on expense_id
router.delete('/:expenseId', deleteExpenses);

module.exports = router;