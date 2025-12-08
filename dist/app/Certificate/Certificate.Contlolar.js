import { CertificateService } from "../Certificate/Certificate.Sarvises.js";
// CREATE → নতুন certificate
export const createCertificateController = async (req, res) => {
    try {
        const certificate = await CertificateService.createCertificateService(req.body);
        res.status(201).json({
            success: true,
            message: "Certificate created successfully",
            data: certificate,
        });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
// GET ALL → সব certificate fetch করা
export const getAllCertificatesController = async (_req, res) => {
    try {
        const certificates = await CertificateService.getAllCertificatesService();
        res.status(200).json({ success: true, data: certificates });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
// GET SINGLE → id দিয়ে certificate fetch করা
export const getSingleCertificateController = async (req, res) => {
    try {
        const id = req.params.id;
        const certificate = await CertificateService.getSingleCertificateService(id);
        if (!certificate)
            return res.status(404).json({ success: false, message: "Certificate not found" });
        res.status(200).json({ success: true, data: certificate });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
// UPDATE → id দিয়ে certificate update করা
export const updateCertificateController = async (req, res) => {
    try {
        const id = req.params.id;
        const certificate = await CertificateService.updateCertificateService(id, req.body);
        if (!certificate)
            return res.status(404).json({ success: false, message: "Certificate not found" });
        res.status(200).json({ success: true, message: "Certificate updated successfully", data: certificate });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
// DELETE → id দিয়ে certificate delete করা
export const deleteCertificateController = async (req, res) => {
    try {
        const id = req.params.id;
        const certificate = await CertificateService.deleteCertificateService(id);
        if (!certificate)
            return res.status(404).json({ success: false, message: "Certificate not found" });
        res.status(200).json({ success: true, message: "Certificate deleted successfully", data: certificate });
    }
    catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};
// Export all controllers as a single object
export const CertificateController = {
    createCertificateController,
    getAllCertificatesController,
    getSingleCertificateController,
    updateCertificateController,
    deleteCertificateController,
};
//# sourceMappingURL=Certificate.Contlolar.js.map