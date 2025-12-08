import { SuccessStoryService } from "./success.Sarvisess.js";
// CREATE → নতুন Success Story
export const createSuccessStoryController = async (req, res) => {
    try {
        const story = await SuccessStoryService.createSuccessStoryService(req.body);
        res.status(201).json({ success: true, message: "Story created successfully", data: story });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
// GET ALL
export const getAllSuccessStoriesController = async (_req, res) => {
    try {
        const stories = await SuccessStoryService.getAllSuccessStoriesService();
        res.status(200).json({ success: true, data: stories });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
// GET SINGLE
export const getSingleSuccessStoryController = async (req, res) => {
    try {
        const id = req.params.id;
        const story = await SuccessStoryService.getSingleSuccessStoryService(id);
        if (!story)
            return res.status(404).json({ success: false, message: "Story not found" });
        res.status(200).json({ success: true, data: story });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
// UPDATE
export const updateSuccessStoryController = async (req, res) => {
    try {
        const id = req.params.id;
        const story = await SuccessStoryService.updateSuccessStoryService(id, req.body);
        if (!story)
            return res.status(404).json({ success: false, message: "Story not found" });
        res.status(200).json({ success: true, message: "Story updated successfully", data: story });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
// DELETE
export const deleteSuccessStoryController = async (req, res) => {
    try {
        const id = req.params.id;
        const story = await SuccessStoryService.deleteSuccessStoryService(id);
        if (!story)
            return res.status(404).json({ success: false, message: "Story not found" });
        res.status(200).json({ success: true, message: "Story deleted successfully", data: story });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
// Export all controllers as a single object
export const SuccessStoryController = {
    createSuccessStoryController,
    getAllSuccessStoriesController,
    getSingleSuccessStoryController,
    updateSuccessStoryController,
    deleteSuccessStoryController,
};
//# sourceMappingURL=success.contlolar.js.map