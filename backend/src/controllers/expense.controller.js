const {db} = require("../utils/database")
const {dayjs} = require("../utils")

exports.addExpense = async (req, res) => {
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

        const expense = await db.expense.create({
            data: {
                description: description,
                date: date ? new Date(date) : undefined,
                value: value,
                accountId: accountId
            }
        })

        return res.status(200).send(expense);

    } catch (error) {
        return res.status(500).send({message: "Error while trying to add expense"});
    }
}

exports.deleteExpense = async (req, res) => {
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

exports.getAllExpensesForAccount = async (req, res) => {
    try {

        const {dateFrom, dateTo, description} = req.query;

        const expenses = await db.expense.findMany({
            where: {
                accountId: parseInt(req.params.accountId),
                date: {
                    gte: dateFrom ? dayjs.utc(dateFrom).startOf('day').toDate() : undefined,
                    lte: dateTo ? dayjs.utc(dateTo).endOf('day').toDate(): undefined
                },
                description: {
                    contains: description
                }
            }
        })

        return res.status(200).send(expenses);

    } catch (error) {
        return res.status(500).send({message: "Error while trying to get all expenses"});
    }
}

exports.getAllExpensesForUser = async (req, res) => {
    try {

        const {dateFrom, dateTo, description} = req.query;

        const expenses = await db.expense.findMany({
            where: {
                account: {
                    owner: {
                        nick: req.params.nick
                    }
                },
                date: {
                    gte: dateFrom ? dayjs.utc(dateFrom).startOf('day').toDate() : undefined,
                    lte: dateTo ? dayjs.utc(dateTo).endOf('day').toDate() : undefined,
                },
                description: {
                    contains: description
                }
            }
        })

        return res.status(200).send(expenses);

    } catch (error) {
        return res.status(500).send({message: "Error while trying to get all expenses"});
    }
}