// src/app/modules/certificate/certificate.service.ts

import type { ICertificate } from "./Certificate.intarfase.js";
import { Certificate } from "./Certificate.model.js";

// CREATE → নতুন certificate তৈরি
const createCertificateService = async (payload: ICertificate): Promise<ICertificate> => {
  return await Certificate.create(payload);
};

// GET ALL → সব certificate fetch করা
const getAllCertificatesService = async (): Promise<ICertificate[]> => {
  return await Certificate.find();
};

// GET SINGLE → id দিয়ে single certificate fetch করা
const getSingleCertificateService = async (id: string): Promise<ICertificate | null> => {
  return await Certificate.findById(id);
};

// UPDATE → id দিয়ে certificate update করা
const updateCertificateService = async (
  id: string,
  payload: Partial<ICertificate>
): Promise<ICertificate | null> => {
  return await Certificate.findByIdAndUpdate(id, payload, { new: true });
};

// DELETE → id দিয়ে certificate delete করা
const deleteCertificateService = async (id: string): Promise<ICertificate | null> => {
  return await Certificate.findByIdAndDelete(id);
};

export const CertificateService = {
  createCertificateService,
  getAllCertificatesService,
  getSingleCertificateService,
  updateCertificateService,
  deleteCertificateService,
};
