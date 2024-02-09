import nodemailer from 'nodemailer';
import User from "@/models/userModel";
import bcryptjs from "bcryptjs";

export const sendMail = async ({ email, emailType, userId }: any) => {
    try {
        const hashedToken = await bcryptjs.hash(userId, 10);

        if (emailType === "VERIFY") {
            await User.findByIdAndUpdate(userId, {
                verifyToken: hashedToken, // Correct variable name
                verifyTokenExpiry: Date.now() + 10 * 60 * 1000
            });
        } else if (emailType === "RESET") {
            await User.findByIdAndUpdate(userId, {
                forgotPasswordToken: hashedToken, // Correct variable name
                forgotPasswordTokenExpiry: Date.now() + 10 * 60 * 1000
            });
        }

        // Add email sending logic using nodemailer here

    } catch (error : any) { // Simplify error handling
        throw new Error(error.message);
    }
}
