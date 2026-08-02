import { z } from "zod";

export const contactFormSchema = z.object({
  name: z.string().trim().min(2, "Please enter your full name."),
  email: z.string().trim().email("Please enter a valid email address."),
  subject: z.string().trim().min(3, "Subject must be at least 3 characters."),
  message: z
    .string()
    .trim()
    .min(10, "Message should be at least 10 characters."),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
