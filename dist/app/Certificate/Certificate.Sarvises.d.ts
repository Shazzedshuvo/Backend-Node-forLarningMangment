import type { ICertificate } from "./Certificate.intarfase.js";
export declare const CertificateService: {
    createCertificateService: (payload: ICertificate) => Promise<ICertificate>;
    getAllCertificatesService: () => Promise<ICertificate[]>;
    getSingleCertificateService: (id: string) => Promise<ICertificate | null>;
    updateCertificateService: (id: string, payload: Partial<ICertificate>) => Promise<ICertificate | null>;
    deleteCertificateService: (id: string) => Promise<ICertificate | null>;
};
//# sourceMappingURL=Certificate.Sarvises.d.ts.map