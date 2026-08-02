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
  "Custom Software & SaaS",
  "AI Solutions & Automation",
  "CRM, ERP, Portals & Dashboards",
  "Mobile Applications",
  "Cloud, APIs & DevOps",
  "Product Strategy & Digital Transformation",
  "Not sure yet",
] as const;
