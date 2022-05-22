import { authRouter } from "./auth.routes";
import accountRoutes from "./account.routes";
import earningRoutes from "./earning.routes";
import expenseRoutes from "./expense.routes";
import userRoutes from "./user.routes";
import { Router } from "express";

const router = Router();

router.use("/auth", authRouter);
router.use("/account", accountRoutes);
router.use("/earning", earningRoutes);
router.use("/expense", expenseRoutes);
router.use("/user", userRoutes);

export default router;