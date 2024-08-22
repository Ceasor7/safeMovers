import nodemailer from 'nodemailer';

export const POST = async (req, res) => {
  if (req.method === 'POST') {
    try {
      const body = await req.json(); // This will parse the JSON body
      const { to, subject, text } = body;

      let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: process.env.NEXT_PUBLIC_ADMIN_EMAIL,
          pass: process.env.NEXT_PUBLIC_EMAIL_PASSWORD,
        },
      });

      let info = await transporter.sendMail({
        from: process.env.NEXT_PUBLIC_ADMIN_EMAIL,
        to: to,
        subject: subject,
        text: text,
      });

      console.log('Message sent %s', info.messageId);
      return new Response(JSON.stringify({ success: true }), { status: 200 });
    } catch (error) {
      console.error('Error sending email:', error);
      return new Response(
        JSON.stringify({ success: false, error: error.message }),
        { status: 500 }
      );
    }
  } else {
    return new Response(JSON.stringify({ message: 'Method not allowed' }), {
      status: 405,
    });
  }
};
