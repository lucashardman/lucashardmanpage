import sgMail from '@sendgrid/mail';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    const name = req.body.firstName + ' ' + req.body.lastName;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;
    const phone = req.body.phone;

    const mailer = sgMail.setApiKey(process.env.SENDGRID_API_KEY);

    const msg = {
      to: process.env.ADMIN_EMAIL,
      from: email,
      subject: subject,
      text: `\
      Obrigado pelo contato, ${name}! \
      \nEssa é uma mensagem automática para avisar que recebi a sua mensagem. \
      \n\nAtenciosamente, \
      \n Lucas Hardman \
      \n -----------------------------------------------------------------------\
      \n${message}
      \n ${name} - ${email} - ${phone}
      `
    };
    mailer.send(msg);
      
    return res.status(200).json({ code: 200, status: 'Message Sent' });
  } else {
    res.status(405).json({ message: 'Only POST requests are allowed.' });
  }
}
