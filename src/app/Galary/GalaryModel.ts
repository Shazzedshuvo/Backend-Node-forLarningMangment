import mongoose, { model, Schema } from "mongoose";
import type { IGalleryItem } from "./Galary.Intarfase.js";


const GallerySchema = new Schema<IGalleryItem>(
  {
    id: { type: Number, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    imageUrl: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

export const GalleryModel = model<IGalleryItem>("Gallery", GallerySchema);
