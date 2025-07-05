import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.USER_EMAIL,
    pass: process.env.USER_PASS,
  },
});

export const recieveMail = (user, link) => {
  const { email, username } = user;

  const isReset = link.includes("resetpassword");

  const subject = isReset ? "Reset Your Password" : "Verify Your Email";
  const actionText = isReset
    ? "Click the link below to reset your password"
    : "Click the link below to verify your account";

  const buttonText = isReset ? "Reset Password" : "Verify Email";

  transporter.sendMail({
    from: process.env.USER_EMAIL,
    to: email,
    subject,
    html: `
      <h1>Hello, ${username}</h1>
      <p>${actionText}</p>
      <a href="${link}" style="padding:10px 20px;background-color:#007BFF;color:white;text-decoration:none;border-radius:5px;">
        ${buttonText}
      </a>
      <p>If you didn't request this, you can ignore this message.</p>
    `,
  });
};
