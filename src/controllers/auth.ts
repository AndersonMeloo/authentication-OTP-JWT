import { RequestHandler } from "express";
import { authSigninSchema } from "../schemas/auth-signin";
import { getUserByEmail } from "../services/user";
import { generateOTP } from "../services/otp";

export const signin: RequestHandler = async (req, res) => {

    // Validate received data 
    const data = authSigninSchema.safeParse(req.body);

    if (!data.success) {
        res.json({ error: data.error.flatten().fieldErrors });
        return;
    }

    // Check if user exists 
    const user = await getUserByEmail(data.data.email)
    if (!user) {
        res.json({ error: 'User does not exist' })
        return
    }

    //  Generate OTP code
    const otp = await generateOTP(user.id)

    // Send email to user

    // Return OTP ID CODE
    res.json({ id: otp.id })
};
