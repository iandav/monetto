import {db} from "../utils/database";
import {Request, Response} from "express";

const createAccount = async (req: Request, res: Response) => {
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
        return res.status(500).send({message: "Error while trying to create account"});
    }
}

const getAccountsForUser = async (req: Request, res: Response) => {
    try {

        const accounts = await db.account.findMany({
            where: {
                owner: {
                    nick: req.params.nick
                },
            },
            select: {
                earnings: true,
                expenses: true,
                account_id: true,
            }
        })

        return res.status(200).send(accounts);

    } catch (error) {
        return res.status(500).send({message: "Error while trying to get user accounts"});
    }
}

const getAccount = async (req: Request, res: Response) => {
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
        return res.status(500).send({message: "Error while trying to get account"});
    }
}

const deleteAccount = async (req: Request, res: Response) => {
    try {

        const account = await db.account.findFirst({
            where: {
                account_id: parseInt(req.params.id)
            }
        })

        if (!account) {
            return res.status(404).send({message: "Account not found"});
        }

        await db.account.delete({
            where: {
                account_id: account.account_id
            }
        })

        return res.status(200).send();

    } catch (error) {
        return res.status(500).send({message: "Error while trying to delete account"});
    }
}

export default {
    createAccount,
    getAccountsForUser,
    getAccount,
    deleteAccount
}