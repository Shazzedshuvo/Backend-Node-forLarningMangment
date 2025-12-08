import mongoose, { model, Schema } from "mongoose";
import type { IWorkingPartner } from "./workingPartner.interface.js";


const WorkingPartnerSchema = new Schema<IWorkingPartner>(
  {
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    description: { type: String },
    imageUrl: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

export const WorkingPartnerModel = model<IWorkingPartner>(
  "WorkingPartner",
  WorkingPartnerSchema
);
