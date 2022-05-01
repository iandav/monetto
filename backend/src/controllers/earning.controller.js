const {db} = require("../utils/database")


exports.addEarning = async (req, res) => {
    try {

        const account = await db.account.findFirst({
            where: {
                account_id: req.body.accountId
            }
        })

        if (!account) {
            return res.status(404).send({message: "Account not found"});
        }

        const earning = await db.earning.create({
            data: {
                description: req.body.description,
                date: req.body.date,
                value: req.body.value,
                accountId: req.body.accountId
            }
        })

        return res.status(200).send(earning);

    } catch (error) {
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

exports.getAllEarnings = async (req, res) => {
    try {

        const earnings = await db.earning.findMany({
            where: {
                accountId: parseInt(req.params.accountId)
            }
        })

        return res.status(200).send(earnings);

    } catch (error) {
        return res.status(500).send({message: "Error while trying to get all earnings"});
    }
}
