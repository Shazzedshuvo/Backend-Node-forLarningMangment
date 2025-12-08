import { z } from "zod";
export declare const workingPartnerValidationSchema: z.ZodObject<{
    id: z.ZodNumber;
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    imageUrl: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=workingPartner.validation.d.ts.map