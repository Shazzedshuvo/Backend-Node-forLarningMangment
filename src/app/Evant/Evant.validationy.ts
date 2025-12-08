import { z } from "zod";

export const eventValidationSchema = z.object({
  id: z.number().int().positive(), // 1,2,3...
  
  speakerName: z
    .string()
    .min(2, "Speaker name is too short"),
    
  eventTitle: z
    .string()
    .min(2, "Event title is too short"),

  speaker: z
    .string()
    .min(2, "Speaker field is too short"),

  time: z
    .string()
    .regex(/^([0-1]?[0-9]|2[0-3]):[0-5][0-9]\s?(AM|PM)$/i, "Invalid time format (example: 16:00 PM)"),

  date: z
    .string()
    .regex(/^\d{4}-\d{2}-\d{2}$/, "Invalid date format (YYYY-MM-DD)"),

  status: z.enum(["Event Started", "Upcoming"]).or(z.string()),

  imageUrl: z
    .string()
    .url("Invalid image URL")
});
