import controller from "../controllers/user.controller";
import {authJwt} from "../middlewares";
import {Router} from "express";

export const userRouter = Router();

userRouter.post("/update/email", [authJwt.verifyToken], controller.updateEmail);
userRouter.post("/update/username", [authJwt.verifyToken], controller.updateUsername);
userRouter.post("/update/password", [authJwt.verifyToken], controller.updatePassword);
userRouter.post("/delete/account", [authJwt.verifyToken], controller.deleteAccount);
userRouter.get("/profile/:nick", [authJwt.verifyToken], controller.userProfile);