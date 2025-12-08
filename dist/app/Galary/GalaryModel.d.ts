import mongoose from "mongoose";
import type { IGalleryItem } from "./Galary.Intarfase.js";
export declare const GalleryModel: mongoose.Model<IGalleryItem, {}, {}, {}, mongoose.Document<unknown, {}, IGalleryItem, {}, {}> & IGalleryItem & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, any>;
//# sourceMappingURL=GalaryModel.d.ts.map