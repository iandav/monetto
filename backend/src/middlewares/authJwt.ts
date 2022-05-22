import { verify, VerifyErrors, VerifyCallback, JwtPayload } from "jsonwebtoken";
import {authConfig} from "../config";
import {Request, Response, NextFunction} from "express";



const verifyToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.session ? req.session.token : null;

    if (!token) {
        return res.status(403).send({
            message: "Token missing"
        })
    }
    
    const tokenVerifyCallback: VerifyCallback<JwtPayload | string> = (err: VerifyErrors | null): void | Response => {
        if (err) {
            return res.status(401).send({
                message: "Unauthorized"
            })
        }
        
        next();
    }

    verify(token, authConfig.secret, tokenVerifyCallback)
}


export const authJwt = {
    verifyToken
}
