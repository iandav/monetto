import controller from "../controllers/earning.controller";
import {authJwt} from "../middlewares";
import {Router} from "express";

export const earningRouter = Router();

earningRouter.post("", [authJwt.verifyToken], controller.addEarning);
earningRouter.delete("/:id", [authJwt.verifyToken], controller.deleteEarning);
earningRouter.get("/:accountId", [authJwt.verifyToken], controller.getAllEarningsForAccount);
earningRouter.get("/user/:nick", [authJwt.verifyToken], controller.getAllEarningsForUser);
