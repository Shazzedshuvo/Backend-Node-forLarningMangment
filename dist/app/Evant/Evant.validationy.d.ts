import { z } from "zod";
export declare const eventValidationSchema: z.ZodObject<{
    id: z.ZodNumber;
    speakerName: z.ZodString;
    eventTitle: z.ZodString;
    speaker: z.ZodString;
    time: z.ZodString;
    date: z.ZodString;
    status: z.ZodUnion<[z.ZodEnum<{
        "Event Started": "Event Started";
        Upcoming: "Upcoming";
    }>, z.ZodString]>;
    imageUrl: z.ZodString;
}, z.core.$strip>;
//# sourceMappingURL=Evant.validationy.d.ts.map