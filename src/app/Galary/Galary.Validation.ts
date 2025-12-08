import { z } from "zod";

export const galleryValidationSchema = z.object({
  id: z.number().int().positive("ID must be a positive integer"),
  title: z.string().min(2, "Title must be at least 2 characters"),
  description: z.string().min(5, "Description must be at least 5 characters"),
  imageUrl: z.string().url("Image URL must be a valid URL"),
});
