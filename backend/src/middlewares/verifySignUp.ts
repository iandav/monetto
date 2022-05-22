import {db} from "../utils/database";
import {Request, Response, NextFunction} from "express";

const checkDuplicateUsernameOrEmail = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await db.user.findFirst({
            where: {
                nick: req.body.nick
            }
        })

        if (user) {
            return res.status(400).send({
                message: "Username already in use"
            })
        }

        const email = await db.user.findFirst({
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
