const controller = require("../controllers/account.controller")
const {authJwt} = require("../middlewares")

module.exports = function(app) {
    
    // Get ALL the Accounts corresponding to a User
    app.get(
        "/api/accounts/:nick",
        [authJwt.verifyToken],
        controller.getAccountsForUser
    )
    
    // Create an Account
    app.post(
        "/api/account/:nick",
        [authJwt.verifyToken],
        controller.createAccount
    )

    // Get a single Account by its id
    app.get(
        "/api/account/:id",
        [authJwt.verifyToken],
        controller.getAccount
    )

    // Delete an account
    app.delete(
        "/api/account/:id",
        [authJwt.verifyToken],
        controller.deleteAccount
    )

}