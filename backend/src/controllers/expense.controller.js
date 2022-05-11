const {db} = require("../utils/database")
const {dayjs} = require("../utils")

exports.addExpense = async (req, res) => {
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

        const {dateFrom, dateTo, description, includeEmpty} = req.query;

        const accountsWithExpenses = await db.account.findMany({
            where: {
                owner: {
                    nick: req.params.nick,
                },
                expenses: {
                    every: {
                        date: {
                            gte: dateFrom ? dayjs.utc(dateFrom).startOf('day').toDate() : undefined,
                            lte: dateTo ? dayjs.utc(dateTo).endOf('day').toDate() : undefined,
                        },
                        description: {
                            contains: description,
                        },
                    },
                }
            },
            select: {
                account_id: true,
                expenses: true,
            }
        })

        if (includeEmpty) {
            return res.status(200).send(accountsWithExpenses);
        }

        const noEmptyExpenses = accountsWithExpenses.filter(account => account.expenses.length > 0)


        return res.status(200).send(noEmptyExpenses);

    } catch (error) {
        console.log(error)
        return res.status(500).send({message: "Error while trying to get all expenses"});
    }
}