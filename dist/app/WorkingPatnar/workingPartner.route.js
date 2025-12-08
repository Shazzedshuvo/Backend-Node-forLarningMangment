import express from 'express';
import { validateMiddleware } from '../middelware/validetmidelware.js';
import { WorkingPartnerController } from './workingPartner.controller.js';
import { workingPartnerValidationSchema } from './workingPartner.validation.js';
const router = express.Router();
// CREATE WORKING PARTNER
router.post('/create-partner', validateMiddleware(workingPartnerValidationSchema), WorkingPartnerController.createWorkingPartnerController);
// GET ALL WORKING PARTNERS
router.get('/', WorkingPartnerController.getAllWorkingPartnersController);
// GET SINGLE WORKING PARTNER
router.get('/:id', WorkingPartnerController.getSingleWorkingPartnerController);
// UPDATE WORKING PARTNER
router.patch('/:id', WorkingPartnerController.updateWorkingPartnerController);
// DELETE WORKING PARTNER
router.delete('/:id', WorkingPartnerController.deleteWorkingPartnerController);
export const WorkingPartnerRoutes = router;
//# sourceMappingURL=workingPartner.route.js.map