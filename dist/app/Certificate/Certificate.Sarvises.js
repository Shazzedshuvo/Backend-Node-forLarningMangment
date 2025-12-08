// src/app/modules/certificate/certificate.service.ts
import { Certificate } from "./Certificate.model.js";
// CREATE → নতুন certificate তৈরি
const createCertificateService = async (payload) => {
    return await Certificate.create(payload);
};
// GET ALL → সব certificate fetch করা
const getAllCertificatesService = async () => {
    return await Certificate.find();
};
// GET SINGLE → id দিয়ে single certificate fetch করা
const getSingleCertificateService = async (id) => {
    return await Certificate.findById(id);
};
// UPDATE → id দিয়ে certificate update করা
const updateCertificateService = async (id, payload) => {
    return await Certificate.findByIdAndUpdate(id, payload, { new: true });
};
// DELETE → id দিয়ে certificate delete করা
const deleteCertificateService = async (id) => {
    return await Certificate.findByIdAndDelete(id);
};
export const CertificateService = {
    createCertificateService,
    getAllCertificatesService,
    getSingleCertificateService,
    updateCertificateService,
    deleteCertificateService,
};
//# sourceMappingURL=Certificate.Sarvises.js.map