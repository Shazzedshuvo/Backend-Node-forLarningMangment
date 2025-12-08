import type { IEventItem } from "./Evant.intarfase.js";
export declare const EventService: {
    createEventService: (payload: IEventItem) => Promise<IEventItem>;
    getAllEventsService: () => Promise<IEventItem[]>;
    getSingleEventService: (id: string) => Promise<IEventItem | null>;
    updateEventService: (id: string, payload: Partial<IEventItem>) => Promise<IEventItem | null>;
    deleteEventService: (id: string) => Promise<IEventItem | null>;
};
//# sourceMappingURL=Evant.Sarvises.d.ts.map