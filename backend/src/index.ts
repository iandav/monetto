/* eslint no-console: "off" */

import express from "express";
import cors from "cors";
import cookieSession from "cookie-session";
import mainRouter from "./routes"

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

app.use("/api", mainRouter);

app.listen(port, () => {
    console.log(`Monetto Backend listening on port ${port}`)
})