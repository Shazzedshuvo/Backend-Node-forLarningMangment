import type { Request, Response } from "express";
export declare const createEventController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getAllEventsController: (_req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const getSingleEventController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const updateEventController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const deleteEventController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
export declare const EventController: {
    createEventController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    getAllEventsController: (_req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    getSingleEventController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    updateEventController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
    deleteEventController: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
};
//# sourceMappingURL=Evant.Contlolar.d.ts.map