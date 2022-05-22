import bcrypt from "bcryptjs";
import {db} from "../utils/database";
import {Request, Response} from "express";

const userProfile = async (req: Request, res: Response) => {
    try {
        const user = await db.user.findFirst({
            where: {
                nick: req.params.nick
            },
            select: {
                nick: true,
                email: true,
                financialCapital: true,
                role: true
            }
        })

        if (!user) {
            return res.status(404).send({message: "User not found"});
        }

        return res.status(200).send(user);

    } catch (error) {
        return res.status(500).send({message: "Error while trying to get user profile"});
    }
}

const updateEmail = async (req: Request, res: Response) => {
    try {
        const emailExists = await db.user.findFirst({
            where: {
                email: req.body.newEmail
            }
        })

        if (emailExists) {
            return res.status(400).send({
                message: "Email already in use"
            })
        }

        const user = await db.user.findFirst({
            where: {
                nick: req.body.nick
            }
        })
  
        if (!user) {
            return res.status(404).send({message: "User not found"});
        }

        const updatedUser = await db.user.update({
            where: {
                id: user.id
            },
            data: {
                email: req.body.newEmail
            },
        })
        res.status(202).send({message: "User updated successfully"})
    } catch (error) {
        res.status(500).send({message: "Error while updating the user"})
    }
}

const updateUsername = async (req: Request, res: Response) => {
    try {
        const usernameExists = await db.user.findFirst({
            where: {
                nick: req.body.newNick
            }
        })

        if (usernameExists) {
            return res.status(400).send({
                message: "Username already in use"
            })
        }

        const user = await db.user.findFirst({
            where: {
                nick: req.body.nick
            }
        })
     
        if (!user) {
            return res.status(404).send({message: "User not found"});
        }

        const updatedUser = await db.user.update({
            where: {
                id: user.id
            },
            data: {
                nick: req.body.newNick
            }
        })

        res.status(202).send({message: "User updated successfully"})
    } catch(error) {
        res.status(500).send({message: "Error while updating the user"})
    }
}

const updatePassword = async (req: Request, res: Response) => {
    try {
        const user = await db.user.findFirst({
            where: {
                nick: req.body.nick
            }
        })

        if (!user) {
            return res.status(404).send({message: "User not found"});
        }

        const samePassword = await bcrypt.compare(req.body.newPassword, user.password)

        if(!samePassword) {

            const updatedUser = await db.user.update({
                where: {
                    id: user.id
                },
                data: {
                    password: bcrypt.hashSync(req.body.newPassword, 8)
                }
            })

            res.status(202).send({message: "User updated successfully"})
        } else {
            res.status(500).send({message: "New password is the same as the old one"})
        }
    } catch(error) {
        res.status(500).send({message: "Error while updating the user"})
    }
}

const deleteAccount = async (req: Request, res: Response) => {
    try {
        const user = await db.user.findFirst({
            where: {
                nick: req.body.nick
            }
        })

        if (!user) {
            return res.status(404).send({message: "User not found"});
        }

        const samePassword = await bcrypt.compare(req.body.password, user.password)

        if(samePassword) {
            const deletedUser = await db.user.delete({
                where: {
                  id: user.id
                }
            })
            req.session = null;
            res.status(202).send({message: "User deleted successfully"})
        } else {
            res.status(500).send({message: "Wrong Password"})
        }
    } catch(error) {
        res.status(500).send({message: "Error while deleting the user"})
    }
}

export default {
    userProfile,
    updateEmail,
    updateUsername,
    updatePassword,
    deleteAccount
}