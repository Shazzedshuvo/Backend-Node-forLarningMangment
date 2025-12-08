import type { IWorkingPartner } from "./workingPartner.interface.js";
export declare const WorkingPartnerService: {
    createWorkingPartnerService: (payload: IWorkingPartner) => Promise<IWorkingPartner>;
    getAllWorkingPartnersService: () => Promise<IWorkingPartner[]>;
    getSingleWorkingPartnerService: (id: string) => Promise<IWorkingPartner | null>;
    updateWorkingPartnerService: (id: string, payload: Partial<IWorkingPartner>) => Promise<IWorkingPartner | null>;
    deleteWorkingPartnerService: (id: string) => Promise<IWorkingPartner | null>;
};
//# sourceMappingURL=workingPartner.service.d.ts.map