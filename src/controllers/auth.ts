import { RequestHandler } from "express";
import { authSigninSchema } from "../schemas/auth-signin";
import { authSignUpSchema } from "../schemas/auth-signup";
import { createUser, getUserByEmail } from "../services/user";
import { generateOTP, validateOTP } from "../services/otp";
import { sendEmail } from "../libs/mailtrap";
import { authUserOTPSchema } from "../schemas/auth-userotp";

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
    await sendEmail(

        user.email,
        'Your access code is: ' + otp.code,
        'Enter your code: ' + otp.code
    )

    // Return OTP ID CODE
    res.json({ id: otp.id })
};

export const signup: RequestHandler = async (req, res) => {

    // Validate received data 
    const data = authSignUpSchema.safeParse(req.body);

    if (!data.success) {
        res.json({ error: data.error.flatten().fieldErrors });
        return;
    }

    // Validate if the email exists 
    const user = await getUserByEmail(data.data.email)

    if (user) {
        res.json({ error: 'User with    this email already' })
        return
    }

    // Create User
    const newUser = await createUser(data.data.name, data.data.email)

    // Return data of the newly created user
    res.status(201).json({ user: newUser })
}

export const useOTP: RequestHandler = async (req, res) => {

    // Validate received data
    const data = authUserOTPSchema.safeParse(req.body);

    if (!data.success) {
        res.json({ error: data.error.flatten().fieldErrors });
        return;
    }

    // Validate OTP
    const user = await validateOTP(data.data.id, data.data.code)

    if (!user) {
        res.json({ error: 'Invalid or expired OTP' })
        return
    }

    // Create JWT

    // Return JWT
}
