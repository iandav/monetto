const express = require("express")
const cors = require("cors");
const cookieSession = require("cookie-session");
const {db} = require("./utils/database")

// Server configurations
const app = express()
const port = 3000
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieSession({
    name: "monetto-session",
    secret: "SECRET", // should be changed to env variable
    httpOnly: true
}))


// Routes
require("./routes/auth.routes")(app);
require("./routes/user.routes")(app);


app.listen(port, () => {
    console.log(`Monetto Backend listening on port ${port}`)
})