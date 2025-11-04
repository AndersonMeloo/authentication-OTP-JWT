import z from "zod";

export const authSigninSchema = z.object({

    email: z.string({message: 'Email required'}).email('E-mail invalid')
})