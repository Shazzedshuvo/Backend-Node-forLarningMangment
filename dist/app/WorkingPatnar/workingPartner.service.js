import { WorkingPartnerModel } from "./workingPartner.model.js";
// CREATE → নতুন working partner
const createWorkingPartnerService = async (payload) => {
    return await WorkingPartnerModel.create(payload);
};
// GET ALL → সব working partners fetch করা
const getAllWorkingPartnersService = async () => {
    return await WorkingPartnerModel.find();
};
// GET SINGLE → id দিয়ে single working partner fetch করা
const getSingleWorkingPartnerService = async (id) => {
    return await WorkingPartnerModel.findById(id);
};
// UPDATE → id দিয়ে working partner update করা
const updateWorkingPartnerService = async (id, payload) => {
    return await WorkingPartnerModel.findByIdAndUpdate(id, payload, { new: true });
};
// DELETE → id দিয়ে working partner delete করা
const deleteWorkingPartnerService = async (id) => {
    return await WorkingPartnerModel.findByIdAndDelete(id);
};
export const WorkingPartnerService = {
    createWorkingPartnerService,
    getAllWorkingPartnersService,
    getSingleWorkingPartnerService,
    updateWorkingPartnerService,
    deleteWorkingPartnerService,
};
//# sourceMappingURL=workingPartner.service.js.map