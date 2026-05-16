export const checkAuth = (req, res, next) => {
    // Verificamos si existe el objeto user dentro de la sesión
    if (req.session && req.session.user) {
        // ¡Tiene permiso! next() le dice a Express que continúe al siguiente controlador
        return next();
    }
    
    // Si no está logueado, lo mandamos al login con un mensaje de advertencia
    res.render('pages/auth/login', { error: 'Debes iniciar sesión para acceder a esta sección.' });
};