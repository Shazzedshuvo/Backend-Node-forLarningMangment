import { WorkingPartnerService } from "./workingPartner.service.js";
// CREATE → Create new working partner
export const createWorkingPartnerController = async (req, res) => {
    try {
        const partner = await WorkingPartnerService.createWorkingPartnerService(req.body);
        return res.status(201).json({
            success: true,
            message: "Working partner created successfully",
            data: partner,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
// GET ALL → Fetch all working partners
export const getAllWorkingPartnersController = async (_req, res) => {
    try {
        const partners = await WorkingPartnerService.getAllWorkingPartnersService();
        return res.status(200).json({
            success: true,
            data: partners,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
// GET SINGLE → Fetch working partner by ID
export const getSingleWorkingPartnerController = async (req, res) => {
    try {
        const id = req.params.id;
        const partner = await WorkingPartnerService.getSingleWorkingPartnerService(id);
        if (!partner) {
            return res.status(404).json({
                success: false,
                message: "Working partner not found",
            });
        }
        return res.status(200).json({
            success: true,
            data: partner,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
// UPDATE → Update working partner by ID
export const updateWorkingPartnerController = async (req, res) => {
    try {
        const id = req.params.id;
        const partner = await WorkingPartnerService.updateWorkingPartnerService(id, req.body);
        if (!partner) {
            return res.status(404).json({
                success: false,
                message: "Working partner not found",
            });
        }
        return res.status(200).json({
            success: true,
            message: "Working partner updated successfully",
            data: partner,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
// DELETE → Delete working partner by ID
export const deleteWorkingPartnerController = async (req, res) => {
    try {
        const id = req.params.id;
        const partner = await WorkingPartnerService.deleteWorkingPartnerService(id);
        if (!partner) {
            return res.status(404).json({
                success: false,
                message: "Working partner not found",
            });
        }
        return res.status(200).json({
            success: true,
            message: "Working partner deleted successfully",
            data: partner,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
// Export all controllers
export const WorkingPartnerController = {
    createWorkingPartnerController,
    getAllWorkingPartnersController,
    getSingleWorkingPartnerController,
    updateWorkingPartnerController,
    deleteWorkingPartnerController,
};
//# sourceMappingURL=workingPartner.controller.js.map