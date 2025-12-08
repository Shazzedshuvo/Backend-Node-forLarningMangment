import type { Request, Response } from "express";
export declare const createGalleryController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getAllGalleryController: (_req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getSingleGalleryController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const updateGalleryController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const deleteGalleryController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const GalleryController: {
    createGalleryController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    getAllGalleryController: (_req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    getSingleGalleryController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    updateGalleryController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    deleteGalleryController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
};
//# sourceMappingURL=Galary.Conlolar.d.ts.map