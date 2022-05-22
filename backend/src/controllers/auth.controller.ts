import {db} from "../utils/database";
import {authConfig} from "../config";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import {Request, Response, NextFunction} from "express"

const signup = async (req: Request, res: Response) => {
    try {
        const user = await db.user.create({
            data: {
                email: req.body.email,
                nick: req.body.nick,
                password: bcrypt.hashSync(req.body.password, 8),
            }
        })

        if (user) {
            res.send({message: "User created successfully"});
        }

    } catch (error) {
        res.status(500).send({message: "Error while creating the user"});
    }
}

const signin = async (req: Request, res: Response) => {
    try {
        const user = await db.user.findFirst({
            where: {
                nick: req.body.nick
            }
        })

        if (!user) {
            return res.status(400).send({
                message: "User not found"
            })
        }

        const isValidPassword = bcrypt.compareSync(
            req.body.password,
            user.password
        )

        if (!isValidPassword) {
            return res.status(401).send({
                message: "Invalid password"
            })
        }

        const token = jwt.sign({id: user.id}, authConfig.secret, {
            expiresIn: 86400 // 24 hours
        })

        if (req.session) {
            req.session.token = token;
        }

        return res.status(200).send({
            nick: user.nick,
            email: user.email,
            role: user.role
        })
    } catch (error) {
        return res.status(500).send({message: "Error while signing in"});
    }
}

const signout = async (req: Request, res: Response, next: NextFunction) => {
    try {
        req.session = null;
        return res.status(200).send({
            message: "Signed out successfully"
        })
    } catch (error) {
        next(error);
    }
}

export default {
    signout,
    signin,
    signup
}