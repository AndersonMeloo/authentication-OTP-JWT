import z from "zod";

export const authUserOTPSchema = z.object({

    id: z.string({ message: 'Id OTP Required' }),
    code: z.string().length(6, 'Code must have 6 digits')
})