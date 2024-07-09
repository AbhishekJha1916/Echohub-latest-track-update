import nodemailer from 'nodemailer';

export const sendWelcomeEmail = async (mail: string, username: string): Promise<{ message: string, error?: any }> => {
    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.MAIL,
                pass: process.env.MAIL_KEY
            }
        });

        const mailOptions = {
            from: 'Company@gmail.com',
            to: mail,
            subject: 'Welcome to EchoHub',
            text: `Hello ${username},\n\nWelcome to EchoHub! We are excited to have you on board.\n\nBest regards,\nThe EchoHub Team`
        };

        await transporter.sendMail(mailOptions);
        return { message: 'Welcome email sent' };
    } catch (error) {
        return { message: 'Failed to send welcome email', error };
    }
};
