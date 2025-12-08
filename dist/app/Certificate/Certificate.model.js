// src/app/modules/certificate/certificate.model.ts
import { Schema, model } from "mongoose";
const certificateSchema = new Schema({
    studentId: { type: String, required: true },
    studentName: { type: String, required: true },
    courseName: { type: String, required: true },
    batchName: { type: String, required: true },
    image: { type: String, required: true },
    issuedDate: { type: String, required: true },
}, {
    timestamps: true,
});
export const Certificate = model("Certificate", certificateSchema);
//# sourceMappingURL=Certificate.model.js.map