const express = require("express")
const {PrismaClient} = require("@prisma/client")

const prisma = new PrismaClient();
const app = express()
const port = 3000


app.get("/", async (req, res) => {
    const users = await prisma.user.findMany()
    res.send(users);
})

app.listen(port, () => {
    console.log(`Monetto Backend listening on port ${port}`)
})