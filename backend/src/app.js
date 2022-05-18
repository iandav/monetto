const express = require("express")
const cors = require("cors");
const cookieSession = require("cookie-session");
const {db} = require("./utils/database")

// Server configurations
const app = express()
const port = 3000
app.use(cors(
    {
        origin: ["http://localhost:4000","http://localhost:3001"], // Set enabled frontend origins here
        credentials: true,
        exposedHeaders: ["set-cookie"]
    }
));
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
require("./routes/account.routes")(app);
require("./routes/earning.routes")(app);
require("./routes/expense.routes")(app);


app.listen(port, () => {
    console.log(`Monetto Backend listening on port ${port}`)
})