import nodemailer from 'nodemailer';

export default async (req, res) => {
  const {
    name,
    email,
    movingfromlocation,
    movingtolocation,
    movingfromhousesize,
    movingtohousesize,
    planneddates,
  } = req.body;

  let transporter = nodemailer.createTransport({
    // Your SMTP settings go here
  });

  let mailOptions = {
    from: email,
    to: 'your-email@example.com',
    subject: `New message from ${name}`,
    text: message,
    // You can also use HTML for the email body
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send('Error sending email');
    } else {
      console.log('Email sent: ' + info.response);
      res.status(200).send('Email sent successfully');
    }
  });
};
