import { z } from "zod";

export const successStoryValidationSchema = z.object({
  id: z.string().min(1, "ID is required"),
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  image: z.string().url("Valid image URL required"),
  youtubeIframe: z.string().url("Valid YouTube URL required").optional(),
});
