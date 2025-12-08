
import { z } from "zod";

export const certificateValidationSchema = z.object({
  mobileNumber: z.string().optional(),
  email: z.string().email().optional(),
  studentId: z.string().optional(),
}).refine(
  (data) => data.mobileNumber || data.email || data.studentId,
  {
    message: "Provide at least one of Mobile Number, Email, or Student ID",
    path: ["mobileNumber", "email", "studentId"]
  }
);
