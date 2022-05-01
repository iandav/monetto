const {db} = require("../utils/database")


exports.createAccount = async (req, res) => {
    try {

        const user = await db.user.findFirst({
            where: {
                nick: req.params.nick
            },
            select: {
                id: true,
            }
        })

        if (!user) {
            return res.status(404).send({message: "User not found"});
        }

        const account = await db.account.create({
            data: {
                userId: user.id
            }
        })

        return res.status(200).send(account);

    } catch (error) {
        return res.status(500).send({message: "Error while trying to get create account"});
    }
}

exports.getAccountsForUser = async (req, res) => {
    try {

        const user = await db.user.findFirst({
            where: {
                nick: req.params.nick
            },
            select: {
                id: true,
            }
        })

        if (!user) {
            return res.status(404).send({message: "User not found"});
        }

        const accounts = await db.account.findMany({
            where: {
                userId: user.id
            }
        })
        

        return res.status(200).send(accounts);

    } catch (error) {
        return res.status(500).send({message: "Error while trying to get user accounts"});
    }
}

exports.getAccount = async (req, res) => {
    try {

        const account = await db.account.findFirst({
            where: {
                account_id: parseInt(req.params.id)
            }
        })

        if (!account) {
            return res.status(404).send({message: "Account not found"});
        }

        return res.status(200).send(account);

    } catch (error) {
        return res.status(500).send({message: "Error while trying to get user accounts"});
    }
}

exports.deleteAccount = async (req, res) => {
    try {

        const account = await db.account.delete({
            where: {
                account_id: parseInt(req.params.id)
            }
        })

        if (!account) {
            return res.status(404).send({message: "Account not found"});
        }

        return res.status(200).send();

    } catch (error) {
        return res.status(500).send({message: "Error while trying to get user accounts"});
    }
}