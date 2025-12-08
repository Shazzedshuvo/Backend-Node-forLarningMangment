import { z } from "zod";
export declare const successStoryValidationSchema: z.ZodObject<{
    id: z.ZodString;
    title: z.ZodString;
    description: z.ZodString;
    image: z.ZodString;
    youtubeIframe: z.ZodOptional<z.ZodString>;
}, z.core.$strip>;
//# sourceMappingURL=sucess.validition.d.ts.map