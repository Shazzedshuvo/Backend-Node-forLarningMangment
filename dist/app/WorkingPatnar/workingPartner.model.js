import mongoose, { model, Schema } from "mongoose";
const WorkingPartnerSchema = new Schema({
    id: { type: Number, required: true, unique: true },
    name: { type: String, required: true },
    description: { type: String },
    imageUrl: { type: String, required: true },
}, { timestamps: true, versionKey: false });
export const WorkingPartnerModel = model("WorkingPartner", WorkingPartnerSchema);
//# sourceMappingURL=workingPartner.model.js.map