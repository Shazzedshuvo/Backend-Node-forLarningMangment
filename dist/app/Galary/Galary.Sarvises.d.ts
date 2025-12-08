import type { IGalleryItem } from "./Galary.Intarfase.js";
export declare const GalleryService: {
    createGalleryService: (payload: IGalleryItem) => Promise<IGalleryItem>;
    getAllGalleryService: () => Promise<IGalleryItem[]>;
    getSingleGalleryService: (id: string) => Promise<IGalleryItem | null>;
    updateGalleryService: (id: string, payload: Partial<IGalleryItem>) => Promise<IGalleryItem | null>;
    deleteGalleryService: (id: string) => Promise<IGalleryItem | null>;
};
//# sourceMappingURL=Galary.Sarvises.d.ts.map