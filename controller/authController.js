import { user } from '../models/user.js';

export const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // 1. Buscar el usuario en la DB
        const usuarioEncontrado = await user.findOne({ where: { email } });

        // 2. Validar (aquí luego meterías bcrypt para la contraseña)
        if (!usuarioEncontrado || usuarioEncontrado.password !== password) {
            return res.render('pages/perfil', { error: 'Credenciales incorrectas' });
        }

        // 3. Guardar en la sesión para saber quién está logueado
        req.session.user = {
        id: usuarioEncontrado.id,
        username: usuarioEncontrado.username
    };

    res.redirect('/perfil');

    } catch (error) {
        console.error(error);
        res.render('error', { message: 'Error en el servidor' });
    }
};