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


        const transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth:
                {
                user: process.env.NODEMAILER_USER,
                pass: process.env.NODEMAILER_PASS
            }

        });

    } catch (error : any) {
        throw new Error(error.message);
    }
}
