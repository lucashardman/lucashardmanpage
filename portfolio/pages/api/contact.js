import sgMail from '@sendgrid/mail';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const name = req.body.firstName + ' ' + req.body.lastName;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;
    const phone = req.body.phone;

    const mailer = sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      to: process.env.ADMIN_EMAIL,
      from: process.env.ADMIN_EMAIL,
      subject: subject,
      text: `${message}
      \n ${name} - ${email} - ${phone}
      `
    };
    mailer.send(msg);
      
    return res.status(200).json({ code: 200, status: 'Message Sent' });
  } else {
    res.status(405).json({ message: 'Error' });
  }
}
