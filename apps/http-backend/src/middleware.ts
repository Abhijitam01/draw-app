import { NextFunction, Request, Response } from 'express';
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config"
import { User } from "./custom";

export function middleware( req : Request , res : Response , next : NextFunction){
    const token = req.headers["authorisation"] ?? "";
    if (!token) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    const decoded = jwt.verify(token, JWT_SECRET);
    if (decoded.userId) {
        req.userId = decoded.userId;
        next();
    } else {
        res.status(403).json({
            message : "unauthorized"
        })
    }
}
