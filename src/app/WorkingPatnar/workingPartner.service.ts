import type { IWorkingPartner } from "./workingPartner.interface.js";
import { WorkingPartnerModel } from "./workingPartner.model.js";

// CREATE → নতুন working partner
const createWorkingPartnerService = async (payload: IWorkingPartner): Promise<IWorkingPartner> => {
  return await WorkingPartnerModel.create(payload);
};

// GET ALL → সব working partners fetch করা
const getAllWorkingPartnersService = async (): Promise<IWorkingPartner[]> => {
  return await WorkingPartnerModel.find();
};

// GET SINGLE → id দিয়ে single working partner fetch করা
const getSingleWorkingPartnerService = async (id: string): Promise<IWorkingPartner | null> => {
  return await WorkingPartnerModel.findById(id);
};

// UPDATE → id দিয়ে working partner update করা
const updateWorkingPartnerService = async (
  id: string,
  payload: Partial<IWorkingPartner>
): Promise<IWorkingPartner | null> => {
  return await WorkingPartnerModel.findByIdAndUpdate(id, payload, { new: true });
};

// DELETE → id দিয়ে working partner delete করা
const deleteWorkingPartnerService = async (id: string): Promise<IWorkingPartner | null> => {
  return await WorkingPartnerModel.findByIdAndDelete(id);
};

export const WorkingPartnerService = {
  createWorkingPartnerService,
  getAllWorkingPartnersService,
  getSingleWorkingPartnerService,
  updateWorkingPartnerService,
  deleteWorkingPartnerService,
};
