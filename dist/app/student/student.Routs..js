import express from 'express';
import { StudentController } from './student.Contlolar.js';
import { studentValidationSchema } from './student.Validation.js';
import { validateMiddleware } from '../middelware/validetmidelware.js';
const router = express.Router();
// http://localhost:3000/api/find/6935823379e030d4e8a3ac72 for singale gat
router.post('/create-student', validateMiddleware(studentValidationSchema), StudentController.createStudentController);
router.get('/', StudentController.getAllStudentsController);
router.get('/:id', StudentController.getSingleStudentController);
router.patch('/:id', StudentController.updateStudentController);
router.delete('/:id', StudentController.deleteStudentController);
export const StudentRoutes = router;
//# sourceMappingURL=student.Routs..js.map