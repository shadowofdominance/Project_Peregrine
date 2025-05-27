interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendContactEmail(data: ContactFormData): Promise<void> {
  // Using EmailJS for contact form submission
  const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID || "default_service";
  const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "default_template";
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "default_key";

  try {
    const response = await fetch('https://api.emailjs.com/api/v1.0/email/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        service_id: serviceId,
        template_id: templateId,
        user_id: publicKey,
        template_params: {
          from_name: data.name,
          from_email: data.email,
          subject: data.subject,
          message: data.message,
          to_name: 'Peregrine',
        },
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('Email sending failed:', error);
    throw error;
  }
}
