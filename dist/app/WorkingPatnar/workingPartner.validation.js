import { z } from "zod";
export const workingPartnerValidationSchema = z.object({
    id: z.number().int().positive("ID must be a positive integer"),
    name: z.string().min(2, "Name must be at least 2 characters"),
    description: z.string().optional(),
    imageUrl: z.string().url("Image URL must be a valid URL"),
});
//# sourceMappingURL=workingPartner.validation.js.map