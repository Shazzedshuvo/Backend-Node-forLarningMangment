import type { Request, Response } from "express";
export declare const createCertificateController: (req: Request, res: Response) => Promise<void>;
export declare const getAllCertificatesController: (_req: Request, res: Response) => Promise<void>;
export declare const getSingleCertificateController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateCertificateController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteCertificateController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const CertificateController: {
    createCertificateController: (req: Request, res: Response) => Promise<void>;
    getAllCertificatesController: (_req: Request, res: Response) => Promise<void>;
    getSingleCertificateController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    updateCertificateController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    deleteCertificateController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
};
//# sourceMappingURL=Certificate.Contlolar.d.ts.map