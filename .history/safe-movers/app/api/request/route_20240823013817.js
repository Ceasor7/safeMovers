import { mailOptions, transporter } from '../../../emails/client';
import { replaceMergeTags, stripHTMLTags } from '../../../emails/helpers';

import fs from 'fs';
import { NextResponse } from 'next/server';
import path from 'path';

export async function POST(request) {
  const data = await request.json();

  const htmlFilePath = path.join(
    process.cwd(),
    'emails',
    'request-meeting-form.html'
  );

  let htmlContent = fs.readFileSync(
    htmlFilePath,
    'utf8',
    (err, htmlContent) => {
      if (err) {
        console.error('Error reading HTML file: ', err);
        return;
      }
    }
  );

  htmlContent = replaceMergeTags(data, htmlContent);
  const plainTextContent = stripHTMLTags(htmlContent);

  try {
    await transporter.sendMail({
      ...mailOptions,
      subject: `New Meeting Request Form Inquiry`,
      text: plainTextContent,
      html: htmlContent,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: err.message }, { status: err.status });
  }
}
