import { authRouter } from "./auth.routes";
import {accountRouter} from "./account.routes";
import {earningRouter} from "./earning.routes";
import {expenseRouter} from "./expense.routes";
import {userRouter} from "./user.routes";
import { Router } from "express";

const router = Router();

router.use("/auth", authRouter);
router.use("/account", accountRouter);
router.use("/earning", earningRouter);
router.use("/expense", expenseRouter);
router.use("/user", userRouter);

export default router;