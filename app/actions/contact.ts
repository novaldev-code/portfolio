"use server";

import {
  contactFormSchema,
  type ContactFormValues,
} from "@/lib/validations/contact";

export interface ContactActionState {
  success: boolean;
  message: string;
}

export async function submitContactForm(
  values: ContactFormValues,
): Promise<ContactActionState> {
  const parsed = contactFormSchema.safeParse(values);

  if (!parsed.success) {
    return {
      success: false,
      message: parsed.error.issues[0]?.message ?? "Invalid form submission.",
    };
  }

  try {
    // TODO: integrate an email provider here, e.g.:
    // await resend.emails.send({ from, to, subject, html });
    console.info("[contact-form] New message received:", parsed.data);

    return {
      success: true,
      message: "Thanks for reaching out! I'll get back to you soon.",
    };
  } catch (error) {
    console.error("[contact-form] Failed to process submission", error);
    return {
      success: false,
      message: "Something went wrong. Please try again later.",
    };
  }
}
