import { user } from '../models/user.js'; // Ajustá la ruta según tu estructura
// import { Publicacion } from '../models/publicacion.js'; // Descomentá cuando tengas el modelo de fotos
import { follower } from '../models/follower.js';

export const mostrarPerfil = async (req, res) => {
    try {
        // Valida seguridad
        if (!req.session || !req.session.user) {
            return res.redirect('/auth/login');
        }

        // Obtener el ID del usuario logueado
        const userId = req.session.user.id;

        // Buscar el usuario en la base de datos real
        const usuarioReal = await user.findByPk(userId);

        if (!usuarioReal) {
            return res.send("Error: El usuario de la sesión no existe en la DB");
        }

        const cantSeguidores = await follower.count({ where: { followed_id: userId } });
        const cantSeguidos = await follower.count({ where: { follower_id: userId } });

        // Traer sus fotos (Simulado por ahora hasta que uses la relación de Sequelize)
        const misFotos = [
            { imagen: "foto1.jpg", titulo: "Atardecer en Suyuque", likes: 12, comentarios: 2 },
            { imagen: "foto2.jpg", titulo: "Mi primer post en Fotaza", likes: 35, comentarios: 7 }
        ];

        // 5. Renderizar la vista pasando los datos reales
        res.render("perfil", { 
            usuario: usuarioReal, 
            publicaciones: misFotos, 
            seguidoresCount: cantSeguidores, 
            seguidosCount: cantSeguidos
        });

    } catch (error) {
        console.error("Error en mostrarPerfil:", error);
        res.status(500).send("Error interno del servidor al cargar el perfil.");
    }
};