
import type { IGalleryItem } from "./Galary.Intarfase.js";
import { GalleryModel } from "./GalaryModel.js";

// CREATE → নতুন gallery item তৈরি
const createGalleryService = async (payload: IGalleryItem): Promise<IGalleryItem> => {
  return await GalleryModel.create(payload);
};

// GET ALL → সব gallery item fetch করা
const getAllGalleryService = async (): Promise<IGalleryItem[]> => {
  return await GalleryModel.find();
};

// GET SINGLE → id দিয়ে single gallery item fetch করা
const getSingleGalleryService = async (id: string): Promise<IGalleryItem | null> => {
  return await GalleryModel.findById(id);
};

// UPDATE → id দিয়ে gallery item update করা
const updateGalleryService = async (
  id: string,
  payload: Partial<IGalleryItem>
): Promise<IGalleryItem | null> => {
  return await GalleryModel.findByIdAndUpdate(id, payload, { new: true });
};

// DELETE → id দিয়ে gallery item delete করা
const deleteGalleryService = async (id: string): Promise<IGalleryItem | null> => {
  return await GalleryModel.findByIdAndDelete(id);
};

export const GalleryService = {
  createGalleryService,
  getAllGalleryService,
  getSingleGalleryService,
  updateGalleryService,
  deleteGalleryService,
};
