import type { ISuccessStory } from "./success.intarfase.js";
import { SuccessStoryModel } from "./sucess.model.js";

// CREATE
const createSuccessStoryService = async (payload: ISuccessStory): Promise<ISuccessStory> => {
  return await SuccessStoryModel.create(payload);
};

// GET ALL
const getAllSuccessStoriesService = async (): Promise<ISuccessStory[]> => {
  return await SuccessStoryModel.find();
};

// GET SINGLE
const getSingleSuccessStoryService = async (id: string): Promise<ISuccessStory | null> => {
  return await SuccessStoryModel.findById(id);
};

// UPDATE
const updateSuccessStoryService = async (
  id: string,
  payload: Partial<ISuccessStory>
): Promise<ISuccessStory | null> => {
  return await SuccessStoryModel.findByIdAndUpdate(id, payload, { new: true });
};

// DELETE
const deleteSuccessStoryService = async (id: string): Promise<ISuccessStory | null> => {
  return await SuccessStoryModel.findByIdAndDelete(id);
};

export const SuccessStoryService = {
  createSuccessStoryService,
  getAllSuccessStoriesService,
  getSingleSuccessStoryService,
  updateSuccessStoryService,
  deleteSuccessStoryService,
};
