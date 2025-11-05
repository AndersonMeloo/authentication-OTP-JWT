import z, { email } from "zod";

export const authSignUpSchema = z.object({

    name: z.string({ message: 'Name field is required' }),
    email: z.string({ message: 'Email field is required' }).email('E-mail invalid')
})