const controller = require("../controllers/user.controller")
const authJwt = require("../middlewares")

module.exports = function(app) {
    app.post(
        "/api/user/update/email", 
        [authJwt.authJwt.verifyToken],
        controller.updateEmail
        )

    app.post(
        "/api/user/update/username",
        [authJwt.authJwt.verifyToken],
        controller.updateUsername
        )
        
    app.post(
        "/api/user/update/password",
        [authJwt.authJwt.verifyToken],
        controller.updatePassword
        )

    app.post(
        "/api/user/delete/account",
        [authJwt.authJwt.verifyToken],
        controller.deleteAccount
        )
}