import { verifySignUp } from "../middlewares";
import controller from "../controllers/auth.controller";
import {Router} from "express";

export const authRouter = Router();

authRouter.use(function(req, res, next) {
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, Content-Type, Accept"
    )
    next();
})

authRouter.post("/signup",[verifySignUp.checkDuplicateUsernameOrEmail], controller.signup);
authRouter.post("/signin", controller.signin);
authRouter.post("/signout", controller.signout);