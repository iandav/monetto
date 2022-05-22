import {db} from "../utils/database";
import {dayjs} from "../utils";
import {Request, Response} from "express";
import {EarningQuery} from "../types/earnings";

const addEarning = async (req: Request, res: Response) => {
    try {

        const {description, date, value, accountId} = req.body;

        const account = await db.account.findFirst({
            where: {
                account_id: accountId
            }
        })

        if (!account) {
            return res.status(404).send({message: "Account not found"});
        }

        const earning = await db.earning.create({
            data: {
                description: description,
                date: date ? new Date(date) : undefined,
                value: value,
                accountId: accountId
            }
        })

        return res.status(200).send(earning);

    } catch (error) {
        console.error(error)
        return res.status(500).send({message: "Error while trying to add earning"});
    }
}


const deleteEarning = async (req: Request, res: Response) => {
    try {

        const earning = await db.earning.findFirst({
            where: {
                earning_id: parseInt(req.params.id)
            }
        })

        if (!earning) {
            return res.status(404).send({message: "Earning not found"});
        }


        await db.earning.delete({
            where: {
                earning_id: earning.earning_id
            }
        })

        return res.status(200).send();

    } catch (error) {
        return res.status(500).send({message: "Error while trying to delete earning"});
    }
}

const getAllEarningsForAccount = async (req: Request, res: Response) => {
    try {

        const queryArgs: EarningQuery = {
            dateFrom: req.query.dateFrom as string | undefined,
            dateTo: req.query.dateTo as string | undefined,
            description: req.query.description as string | undefined,
        }

        const earnings = await db.earning.findMany({
            where: {
                accountId: parseInt(req.params.accountId),
                date: {
                    gte: queryArgs.dateFrom ? dayjs.utc(queryArgs.dateFrom).startOf('day').toDate() : undefined,
                    lte: queryArgs.dateTo ? dayjs.utc(queryArgs.dateTo).endOf('day').toDate(): undefined
                },
                description: {
                    contains: queryArgs.description
                }
            }
        })

        return res.status(200).send(earnings);

    } catch (error) {
        return res.status(500).send({message: "Error while trying to get all earnings"});
    }
}

const getAllEarningsForUser = async (req: Request, res: Response) => {
    try {

        const queryArgs: EarningQuery = {
            dateFrom: req.query.dateFrom as string | undefined,
            dateTo: req.query.dateTo as string | undefined,
            description: req.query.description as string | undefined,
        }

        const earnings = await db.earning.findMany({
            where: {
                account: {
                    owner: {
                        nick: req.params.nick
                    }
                },
                date: {
                    gte: queryArgs.dateFrom ? dayjs.utc(queryArgs.dateFrom).startOf('day').toDate() : undefined,
                    lte: queryArgs.dateTo ? dayjs.utc(queryArgs.dateTo).endOf('day').toDate() : undefined,
                },
                description: {
                    contains: queryArgs.description
                }
            }
        })

        return res.status(200).send(earnings);
        
    } catch (error) {
        return res.status(500).send({message: "Error while trying to get all earnings"});
    }
}

export default {
    addEarning,
    deleteEarning,
    getAllEarningsForAccount,
    getAllEarningsForUser
}