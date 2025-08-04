// EmailJS Configuration
// To set up EmailJS:
// 1. Go to https://www.emailjs.com/
// 2. Create an account and get your service ID, template ID, and public key
// 3. Replace the placeholder values below with your actual EmailJS credentials

export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_zs5anfg', // Your EmailJS service ID
  TEMPLATE_ID: 'template_u9yf2gp', // Your EmailJS template ID
  PUBLIC_KEY: '24Lu-4chqOw8ppUHq', // Your EmailJS public key
};

// Example EmailJS template variables:
// {{from_name}} - Sender's name
// {{from_email}} - Sender's email
// {{message}} - Message content
// {{to_name}} - Your name (Pujitha)
// {{to_email}} - Your email address

// Sample template content:
/*
Subject: New Contact Form Message from {{from_name}}

Hello {{to_name}},

You have received a new message from your portfolio contact form:

From: {{from_name}} ({{from_email}})
Message: {{message}}

Best regards,
Portfolio Contact Form
*/