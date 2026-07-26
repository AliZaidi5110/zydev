import { z } from "zod";

export const contactSchema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().optional(),
  company: z.string().optional(),
  service: z.string().optional(),
  message: z.string().min(10, "Tell us a little more (10+ characters)"),
  website: z.string().optional(), // honeypot
});

export type ContactFormValues = z.infer<typeof contactSchema>;

export const serviceOptions = [
  "Website Design & Development",
  "SEO Services",
  "Google My Business",
  "Card Payment Integration",
  "Social Media Management",
  "Not sure yet",
] as const;
