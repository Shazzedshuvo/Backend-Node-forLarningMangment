import type { Request, Response } from "express";
import { GalleryService } from "./Galary.Sarvises.js";

// CREATE → Create new gallery item
export const createGalleryController = async (req: Request, res: Response) => {
  try {
    const gallery = await GalleryService.createGalleryService(req.body);

    return res.status(201).json({
      success: true,
      message: "Gallery item created successfully",
      data: gallery,
    });

  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET ALL → Fetch all gallery items
export const getAllGalleryController = async (_req: Request, res: Response) => {
  try {
    const galleries = await GalleryService.getAllGalleryService();

    return res.status(200).json({
      success: true,
      data: galleries,
    });

  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// GET SINGLE → Fetch gallery item by ID
export const getSingleGalleryController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const gallery = await GalleryService.getSingleGalleryService(id as string);

    if (!gallery) {
      return res.status(404).json({
        success: false,
        message: "Gallery item not found",
      });
    }

    return res.status(200).json({
      success: true,
      data: gallery,
    });

  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// UPDATE → Update gallery item by ID
export const updateGalleryController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const gallery = await GalleryService.updateGalleryService(id as string, req.body);

    if (!gallery) {
      return res.status(404).json({
        success: false,
        message: "Gallery item not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Gallery item updated successfully",
      data: gallery,
    });

  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// DELETE → Delete gallery item by ID
export const deleteGalleryController = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const gallery = await GalleryService.deleteGalleryService(id as string);

    if (!gallery) {
      return res.status(404).json({
        success: false,
        message: "Gallery item not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Gallery item deleted successfully",
      data: gallery,
    });

  } catch (error: any) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Export all controllers
export const GalleryController = {
  createGalleryController,
  getAllGalleryController,
  getSingleGalleryController,
  updateGalleryController,
  deleteGalleryController,
};
