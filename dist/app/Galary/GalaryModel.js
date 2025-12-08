import mongoose, { model, Schema } from "mongoose";
const GallerySchema = new Schema({
    id: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
}, { timestamps: true, versionKey: false });
export const GalleryModel = model("Gallery", GallerySchema);
//# sourceMappingURL=GalaryModel.js.map