// src/app/modules/certificate/certificate.route.ts
import express from 'express';
import { validateMiddleware } from '../middelware/validetmidelware.js';
import { CertificateController } from './Certificate.Contlolar.js';
import { certificateValidationSchema } from './Certificate.Validation.js';
const router = express.Router();
// CREATE CERTIFICATE
router.post('/create-certificate', validateMiddleware(certificateValidationSchema), CertificateController.createCertificateController);
// GET ALL CERTIFICATES
router.get('/', CertificateController.getAllCertificatesController);
// GET SINGLE CERTIFICATE
router.get('/:id', CertificateController.getSingleCertificateController);
// UPDATE CERTIFICATE
router.patch('/:id', CertificateController.updateCertificateController);
// DELETE CERTIFICATE
router.delete('/:id', CertificateController.deleteCertificateController);
export const CertificateRoutes = router;
//# sourceMappingURL=Certificate.Routs.js.map