import controller from "../controllers/account.controller";
import {authJwt} from "../middlewares";
import {Router} from "express";

export const accountRouter = Router();

accountRouter.get("/user/:nick", [authJwt.verifyToken], controller.getAccountsForUser);
accountRouter.get("/:id", [authJwt.verifyToken], controller.getAccount);
accountRouter.post("/:nick", [authJwt.verifyToken], controller.createAccount);
accountRouter.delete("/:id", [authJwt.verifyToken], controller.deleteAccount);