const {db} = require("../utils/database")


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

exports.getAllExpenses = async (req, res) => {
    try {

        const expenses = await db.expense.findMany({
            where: {
                accountId: parseInt(req.params.accountId)
            }
        })

        return res.status(200).send(expenses);

    } catch (error) {
        return res.status(500).send({message: "Error while trying to get all expenses"});
    }
}

exports.getAllExpensesForUser = async (req, res) => {
    try {

        const user = await db.user.findFirst({
            where: {
                nick: req.params.nick
            },
            include: {
                accounts: true
            }
        })

        if (!user) {
            return res.status(404).send({message: "User not found"});
        }


        let allExpenses = [];

        for (let account of user.accounts) {

            const expenses = await db.expense.findMany({
                where: {
                    accountId: account.account_id
                }
            })

            allExpenses.push(...expenses);

        }

        return res.status(200).send(allExpenses);

    } catch (error) {
        console.log(error)
        return res.status(500).send({message: "Error while trying to get all expenses"});
    }
}