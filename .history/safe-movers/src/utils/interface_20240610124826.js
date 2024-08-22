import nodemailer from 'nodemailer';

const transport = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: process.env.NODE_ENV !== 'development', //true
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD,
  },
});

export const Post = {
  title: '',
  slug: { current: '' },
  publishedAt: '',
  excerpt: '',
  body: null,
  tags: [],
  _id: '',
  headings: [],
};
