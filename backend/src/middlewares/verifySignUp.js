const {db} = require("../utils/database")

const checkDuplicateUsernameOrEmail = async (req, res, next) => {
    try {
        let user = await db.user.findFirst({
            where: {
                nick: req.body.nick
            }
        })

        if (user) {
            return res.status(400).send({
                message: "Username already in use"
            })
        }

        let email = await db.user.findFirst({
            where: {
                email: req.body.email
            }
        })

        if (email) {
            return res.status(400).send({
                message: "Email already in use"
            })
        }
        next();

    } catch (error) {
        return res.status(500).send({
            message: "Error while validating user"
        })
    }
}

export const verifySignUp = {
    checkDuplicateUsernameOrEmail
}
