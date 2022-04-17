const {db} = require("../utils/database")
const bcrypt = require("bcryptjs")

exports.updateEmail = async (req, res) => {
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

exports.updateUsername = async (req, res) => {
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

exports.updatePassword = async (req, res) => {
    try {
        const user = await db.user.findFirst({
            where: {
                nick: req.body.nick
            }
        })

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

exports.deleteAccount = async (req, res) => {
    try {
        const user = await db.user.findFirst({
            where: {
                nick: req.body.nick
            }
        })

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