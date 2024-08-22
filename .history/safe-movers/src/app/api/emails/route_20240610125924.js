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
    service: 'gmail',
    auth: {
      user: 'josegee0707@gmail.com@gmail.com',
      pass: 'JkJkpktkfkak!7',
    },
  });

  const message = `
  Name: ${name}
  Email: ${email}
  Moving From Location: ${movingfromlocation}
  Moving To Location: ${movingtolocation}
  Moving From House Size: ${movingfromhousesize}
  Moving To House Size: ${movingtohousesize}
  Planned Dates: ${planneddates}
`;

  let mailOptions = {
    from: email,
    to: 'josegee0707@gmail.com',
    subject: `New message from ${name}`,
    text: message,
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
