import { Router } from 'express';
import { mostrarMiPerfil } from '../controllers/userController.js';
import { checkAuth } from '../middlewares/authMiddleware.js';

const router = Router();

// La ruta primero pasa por el guardia (checkAuth) y si todo está OK, va a mostrarMiPerfil
router.get('/perfil', checkAuth, mostrarMiPerfil);

export default router;