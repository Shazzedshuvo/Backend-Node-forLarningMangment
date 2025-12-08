
// src/app/modules/certificate/certificate.model.ts
import { Schema, model } from "mongoose";
import type { ICertificate } from "./Certificate.intarfase.js";


const certificateSchema = new Schema<ICertificate>(
  {
    studentId: { type: String, required: true },
    studentName: { type: String, required: true },
    courseName: { type: String, required: true },
    batchName: { type: String, required: true },
    image: { type: String, required: true },
    issuedDate: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export const Certificate = model<ICertificate>("Certificate", certificateSchema);
