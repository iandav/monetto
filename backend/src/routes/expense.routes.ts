import controller from "../controllers/expense.controller";
import {authJwt} from "../middlewares";
import {Router} from "express";

export const expenseRouter = Router();

expenseRouter.post("", [authJwt.verifyToken], controller.addExpense);
expenseRouter.delete("/:id", [authJwt.verifyToken], controller.deleteExpense);
expenseRouter.get("/:accountId", [authJwt.verifyToken], controller.getAllExpensesForAccount);
expenseRouter.get("/user/:nick", [authJwt.verifyToken], controller.getAllExpensesForUser);