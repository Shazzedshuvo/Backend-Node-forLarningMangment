import type { ISuccessStory } from "./success.intarfase.js";
export declare const SuccessStoryService: {
    createSuccessStoryService: (payload: ISuccessStory) => Promise<ISuccessStory>;
    getAllSuccessStoriesService: () => Promise<ISuccessStory[]>;
    getSingleSuccessStoryService: (id: string) => Promise<ISuccessStory | null>;
    updateSuccessStoryService: (id: string, payload: Partial<ISuccessStory>) => Promise<ISuccessStory | null>;
    deleteSuccessStoryService: (id: string) => Promise<ISuccessStory | null>;
};
//# sourceMappingURL=success.Sarvisess.d.ts.map