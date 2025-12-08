import { SuccessStoryModel } from "./sucess.model.js";
// CREATE
const createSuccessStoryService = async (payload) => {
    return await SuccessStoryModel.create(payload);
};
// GET ALL
const getAllSuccessStoriesService = async () => {
    return await SuccessStoryModel.find();
};
// GET SINGLE
const getSingleSuccessStoryService = async (id) => {
    return await SuccessStoryModel.findById(id);
};
// UPDATE
const updateSuccessStoryService = async (id, payload) => {
    return await SuccessStoryModel.findByIdAndUpdate(id, payload, { new: true });
};
// DELETE
const deleteSuccessStoryService = async (id) => {
    return await SuccessStoryModel.findByIdAndDelete(id);
};
export const SuccessStoryService = {
    createSuccessStoryService,
    getAllSuccessStoriesService,
    getSingleSuccessStoryService,
    updateSuccessStoryService,
    deleteSuccessStoryService,
};
//# sourceMappingURL=success.Sarvisess.js.map