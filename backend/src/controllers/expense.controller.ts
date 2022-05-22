import {dayjs} from "../utils"
import {db} from "../utils/database"
import {Request, Response} from "express";
import {ExpenseQuery} from "../types/expenses";

const addExpense = async (req: Request, res: Response) => {
    try {

        const account = await db.account.findFirst({
            where: {
                account_id: req.body.accountId
            }
        })

        if (!account) {
            return res.status(404).send({message: "Account not found"});
        }

        const expense = await db.expense.create({
            data: {
                description: req.body.description,
                date: req.body.date,
                value: req.body.value,
                accountId: req.body.accountId
            }
        })

        return res.status(200).send(expense);

    } catch (error) {
        return res.status(500).send({message: "Error while trying to add expense"});
    }
}

const deleteExpense = async (req: Request, res: Response) => {
    try {

        const expense = await db.expense.findFirst({
            where: {
                expense_id: parseInt(req.params.id)
            }
        })

        if (!expense) {
            return res.status(404).send({message: "Expense not found"});
        }


        await db.expense.delete({
            where: {
                expense_id: expense.expense_id
            }
        })

        return res.status(200).send();

    } catch (error) {
        return res.status(500).send({message: "Error while trying to delete expense"});
    }
}

const getAllExpensesForAccount = async (req: Request, res: Response) => {
    try {

        const queryArgs: ExpenseQuery = {
            dateFrom: req.query.dateFrom as string | undefined,
            dateTo: req.query.dateTo as string | undefined,
            description: req.query.description as string | undefined,
        }

        const expenses = await db.expense.findMany({
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

        return res.status(200).send(expenses);

    } catch (error) {
        return res.status(500).send({message: "Error while trying to get all expenses"});
    }
}

const getAllExpensesForUser = async (req: Request, res: Response) => {
    try {

        const queryArgs: ExpenseQuery = {
            dateFrom: req.query.dateFrom as string | undefined,
            dateTo: req.query.dateTo as string | undefined,
            description: req.query.description as string | undefined,
        }

        const expenses = await db.expense.findMany({
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

        return res.status(200).send(expenses);

    } catch (error) {
        return res.status(500).send({message: "Error while trying to get all expenses"});
    }
}

export default {
    addExpense,
    deleteExpense,
    getAllExpensesForAccount,
    getAllExpensesForUser
}