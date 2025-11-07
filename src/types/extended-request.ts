import { Request } from "express";

export type ExtendeRequest = Request & {

    userId?: number
}