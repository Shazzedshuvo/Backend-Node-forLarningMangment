import type { Request, Response } from "express";
export declare const createSuccessStoryController: (req: Request, res: Response) => Promise<void>;
export declare const getAllSuccessStoriesController: (_req: Request, res: Response) => Promise<void>;
export declare const getSingleSuccessStoryController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const updateSuccessStoryController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const deleteSuccessStoryController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
export declare const SuccessStoryController: {
    createSuccessStoryController: (req: Request, res: Response) => Promise<void>;
    getAllSuccessStoriesController: (_req: Request, res: Response) => Promise<void>;
    getSingleSuccessStoryController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    updateSuccessStoryController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
    deleteSuccessStoryController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>> | undefined>;
};
//# sourceMappingURL=success.contlolar.d.ts.map