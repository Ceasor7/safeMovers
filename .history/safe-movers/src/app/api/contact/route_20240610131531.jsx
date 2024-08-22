import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Destructure the form data from the request body
    const {
      name,
      email,
      movingfromlocation,
      movingtolocation,
      movingfromhousesize,
      movingtohousesize,
      planneddates,
    } = req.body;

    // Create a transporter object using Gmail SMTP transport
    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail address
        pass: process.env.GMAIL_APP_PASSWORD, // Your Gmail App Password
      },
    });

    // Set up email data with unicode symbols
    let mailOptions = {
      from: email, // Sender address
      to: process.env.GMAIL_USER, // Your Gmail address
      subject: 'New Estimate Request', // Subject line
      text: `Name: ${name}\nEmail: ${email}\nMoving From: ${movingfromlocation}\nMoving To: ${movingtolocation}\nMoving From House Size: ${movingfromhousesize}\nMoving To House Size: ${movingtohousesize}\nPlanned Dates: ${planneddates}`, // Plain text body
      // You can also use HTML for the email body
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res.status(500).json({ error: error.message });
      }
      res.status(200).json({ message: 'Email sent successfully', info });
    });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
