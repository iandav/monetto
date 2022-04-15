const jwt = require("jsonwebtoken")
const config = require("../config/auth.config")
const {db} = require("../utils/database")

verifyToken = (req, res, next) => {
    let token = req.session.token;
    if (!token) {
        return res.status(403).send({
            message: "Token missing"
        })
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(401).send({
                message: "Unauthorized"
            })
        }
        req.userId = decoded.id;
        next();
    })
}

isAdmin = async (req, res, next) => {
    try {
        const user = await db.user.findFirst({
            where: {
                id: req.userId
            }
        })

        if (user.role === "ADMIN") {
            return next();
        }

        return res.status(403).send({
            message: "Unauthorized"
        })
    } catch (error) {
        return res.status(500).send({
            message: "Unable to validate the User role"
        })
    }
}

const authJwt = {
    verifyToken,
    isAdmin
}

module.exports = authJwt;