import { NextApiRequest, NextApiResponse } from 'next';
import twilio from 'twilio';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {

    const client = twilio(
      process.env.TWILIO_SID as string,
      process.env.TWILIO_AUTH_TOKEN as string
    );

   
    const fromNumber = 'whatsapp:+14155238886'; // Replace with your Twilio WhatsApp number
    const toNumber = 'whatsapp:+2348125111584'; // Replace with the recipient's WhatsApp number

    await client.messages.create({
      body: `New message from ${name} (${email}):\n\n${message}`,
      from: fromNumber, // Twilio approved WhatsApp number
      to: toNumber // Your personal WhatsApp number
    })

    return res.status(200).json({ message: 'Message sent successfully via WhatsApp' });
  } catch (error) {
    console.error('Error sending WhatsApp message:', error);
    return res.status(500).json({ error: 'Something went wrong' });
  }

}
