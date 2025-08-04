# EmailJS Setup Instructions

To enable the contact form email functionality, you need to set up EmailJS:

## Step 1: Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## Step 2: Create Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Note down your **Service ID**

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Contact Form Message from {{from_name}}

**Content:**
```
Hello Pujitha,

You have received a new message from your portfolio contact form:

From: {{from_name}} ({{from_email}})
Message: {{message}}

Best regards,
Portfolio Contact Form
```

4. Save the template and note down your **Template ID**

## Step 4: Get Public Key
1. Go to "Account" in your dashboard
2. Find your **Public Key** (User ID)

## Step 5: Update Configuration
1. Open `src/lib/emailjs-config.ts`
2. Replace the placeholder values:
   - `YOUR_SERVICE_ID` with your Service ID
   - `YOUR_TEMPLATE_ID` with your Template ID  
   - `YOUR_PUBLIC_KEY` with your Public Key

## Step 6: Test
1. Run your portfolio application
2. Fill out the contact form
3. Check your email for the message

## Template Variables Used:
- `{{from_name}}` - Sender's name
- `{{from_email}}` - Sender's email
- `{{message}}` - Message content

## Free Plan Limits:
- 200 emails per month
- EmailJS branding in emails
- Basic support

For production use, consider upgrading to a paid plan for higher limits and no branding.