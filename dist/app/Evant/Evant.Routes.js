import express from 'express';
import { validateMiddleware } from '../middelware/validetmidelware.js';
import { EventController } from './Evant.Contlolar.js';
import { eventValidationSchema } from './Evant.validationy.js';
const router = express.Router();
// CREATE EVENT
router.post('/create-event', validateMiddleware(eventValidationSchema), EventController.createEventController);
// GET ALL EVENTS
router.get('/', EventController.getAllEventsController);
// GET SINGLE EVENT
router.get('/:id', EventController.getSingleEventController);
// UPDATE EVENT
router.patch('/:id', EventController.updateEventController);
// DELETE EVENT
router.delete('/:id', EventController.deleteEventController);
export const EventRoutes = router;
//# sourceMappingURL=Evant.Routes.js.map