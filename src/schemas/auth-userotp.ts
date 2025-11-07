import z from "zod";

export const authUserOTPSchema = z.object({

    id: z.string({ message: 'Id OTP Required' }),
    code: z.string({ message: 'OTP Required' }).length(6, 'Code must have 6 digits')
})