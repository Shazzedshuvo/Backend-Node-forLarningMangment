import express from 'express';

import { validateMiddleware } from '../middelware/validetmidelware.js';
import { galleryValidationSchema } from './Galary.Validation.js';
import { GalleryController } from './Galary.Conlolar.js';

const router = express.Router();

// CREATE GALLERY ITEM
router.post(
  '/create-gallery',
  validateMiddleware(galleryValidationSchema),
  GalleryController.createGalleryController
);

// GET ALL GALLERY ITEMS
router.get('/', GalleryController.getAllGalleryController);

// GET SINGLE GALLERY ITEM
router.get('/:id', GalleryController.getSingleGalleryController);

// UPDATE GALLERY ITEM
router.patch('/:id', GalleryController.updateGalleryController);

// DELETE GALLERY ITEM
router.delete('/:id', GalleryController.deleteGalleryController);

export const GalleryRoutes = router;
