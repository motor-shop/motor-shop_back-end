import { createTransport } from "nodemailer";
import { IEmailRequest } from "../interfaces/email";
import "dotenv/config";
import { AppError } from "../errors/AppErrors";

export const sendEmail = async ({ subject, text, to }: IEmailRequest) => {
    const transporter = createTransport({
        host: "smtp-mail.outlook.com",
        port: 587,
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });

    await transporter
        .sendMail({
            from: "project-motor-shop@outlook.com",
            to: to,
            subject: subject,
            html: text,
        })
        .then((res) => {
            console.log("email send with sucess");
        })
        .catch((error) => {
            console.log(error);
            throw new AppError(500, "Internal server error");
        });
};
