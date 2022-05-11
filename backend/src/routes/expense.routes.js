const controller = require("../controllers/expense.controller")
const {authJwt} = require("../middlewares")

module.exports = function(app) {
    
    // Add an expense to an account
    app.post(
        "/api/expense",
        [authJwt.verifyToken],
        controller.addExpense
    )

    // Delete an expense from an account
    app.delete(
        "/api/expense/:id",
        [authJwt.verifyToken],
        controller.deleteExpense
    )
    
    // Get all the expenses for an account
    app.get(
        "/api/expenses/:accountId",
        [authJwt.verifyToken],
        controller.getAllExpensesForAccount
    )

    // Get all the expenses for an user across all their accounts
    app.get(
        "/api/expenses/user/:nick",
        [authJwt.verifyToken],
        controller.getAllExpensesForUser
    )

}