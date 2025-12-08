import type { Request, Response } from "express";
export declare const createWorkingPartnerController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getAllWorkingPartnersController: (_req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getSingleWorkingPartnerController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const updateWorkingPartnerController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const deleteWorkingPartnerController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const WorkingPartnerController: {
    createWorkingPartnerController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    getAllWorkingPartnersController: (_req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    getSingleWorkingPartnerController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    updateWorkingPartnerController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    deleteWorkingPartnerController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
};
//# sourceMappingURL=workingPartner.controller.d.ts.map