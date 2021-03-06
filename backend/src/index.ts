/* eslint no-console: "off" */

import express from "express";
import cors from "cors";
import cookieSession from "cookie-session";
import morgan from "morgan";
import mainRouter from "./routes"

// Server configurations
export const app = express()
export const port = 3000
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
}));
app.use(morgan('combined'));

app.use("/api", mainRouter);

