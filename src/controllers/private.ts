import { Response } from "express";
import { ExtendeRequest } from "../types/extended-request";
import { getUserId } from "../services/user";

export const test = async (req: ExtendeRequest, res: Response) => {

    if (!req.userId) {
        res.status(401).json({ error: 'Acces denied' })
        return
    }

    const user = await getUserId(req.userId)

    if (!user) {
        res.status(401).json({ error: 'Acces denied' })
    }

    res.json({ user })
}