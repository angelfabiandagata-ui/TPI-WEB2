import { Router } from 'express';
import { mostrarPerfil } from '../controller/perfilController.js';
import { cambiarAvatarAsincronico } from '../controller/perfilController.js';

const router = Router();

// Cuando alguien entre a la raíz de este enrutador
router.get('/', mostrarPerfil);

router.post('/perfil/cambiar-avatar', cambiarAvatarAsincronico);

// El día de mañana podés sumar acá:
// router.get('/editar', editarPerfilForm);
// router.post('/editar', actualizarPerfil);



export default router;