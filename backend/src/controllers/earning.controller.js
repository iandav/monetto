const {db} = require("../utils/database")
const {dayjs} = require("../utils")


exports.addEarning = async (req, res) => {
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


exports.deleteEarning = async (req, res) => {
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

exports.getAllEarningsForAccount = async (req, res) => {
    try {

        const {dateFrom, dateTo, description} = req.query;

        const earnings = await db.earning.findMany({
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

        return res.status(200).send(earnings);

    } catch (error) {
        return res.status(500).send({message: "Error while trying to get all earnings"});
    }
}

exports.getAllEarningsForUser = async (req, res) => {
    try {

        const {dateFrom, dateTo, description} = req.query;

        const earnings = await db.earning.findMany({
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

        return res.status(200).send(earnings);
        
    } catch (error) {
        return res.status(500).send({message: "Error while trying to get all earnings"});
    }
}