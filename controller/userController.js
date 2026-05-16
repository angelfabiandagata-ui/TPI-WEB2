import { user } from '../models/user.js';
import { publication } from '../models/publication.js';

export const mostrarMiPerfil = async (req, res) => {
    try {
        // Obtenemos el ID del usuario desde la sesión
        const userIdLogueado = req.session.user.id;

        // Buscamos sus datos y sus fotos para mostrarlas en su perfil
        const datosUsuario = await user.findByPk(userIdLogueado, {
            include: [{ model: publication, as: 'misPublicaciones' }]
        });

        // Renderizamos la vista del perfil pasándole los datos de la DB
        res.render('pages/perfil/ver-perfil', { usuario: datosUsuario });

    } catch (error) {
        res.redirect('/auth/login'); // Si no hay sesión, al login
    }
};