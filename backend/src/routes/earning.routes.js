const controller = require("../controllers/earning.controller")
const {authJwt} = require("../middlewares")

module.exports = function(app) {
    
    // Add an earning to an account
    app.post(
        "/api/earning",
        [authJwt.verifyToken],
        controller.addEarning
    )

    // Delete an earning from an account
    app.delete(
        "/api/earning/:id",
        [authJwt.verifyToken],
        controller.deleteEarning
    )
    
    // Get all the earnings for an account
    app.get(
        "/api/earnings/:accountId",
        [authJwt.verifyToken],
        controller.getAllEarningsForAccount
    )

    // Get all the earnings for an user across all their accounts
    app.get(
        "/api/earnings/user/:nick",
        [authJwt.verifyToken],
        controller.getAllEarningsForUser
    )


}