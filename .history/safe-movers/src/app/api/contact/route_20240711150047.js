import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // e.g., 'gmail'
      auth: {
        user: process.env.EMAIL_USER, // your email
        pass: process.env.EMAIL_PASS, // your email password
      },
    });

    // Email options
    const mailOptions = {
      from: email,
      to: process.env.EMAIL_TO, // your email
      subject: `New message from ${name}`,
      text: message,
      html: `<p>You have a new message from <b>${name}</b> (${email})</p><p>${message}</p>`,
    };

    // Send email
    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ success: false });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}