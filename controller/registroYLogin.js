import express from 'express';
import { user } from '../models/user.js'; // Tu modelo importado en minúscula

const RegYLogin = express.Router();

// 1. MOSTRAR LOGIN (GET)
RegYLogin.get("/auth/login", (req, res) => {
    res.render("auth/login");
});

// 2. PROCESAR LOGIN (POST) - ¡Acá unificamos todo con tus variables reales!
RegYLogin.post("/auth/login", async (req, res) => {
    try {
        // Tu formulario de PUG envía 'email' y 'password'
        const { email, password } = req.body;

        // BUSQUEDA: Usamos tu modelo 'user' en minúscula y buscamos por email
        const usuarioEncontrado = await user.findOne({ where: { email: email } });

        // VALIDACIÓN 1: Si no existe el email
        if (!usuarioEncontrado) {
            return res.render('auth/login', { error: 'El email o la contraseña son incorrectos.' });
        }

        // VALIDACIÓN 2: Comparamos la contraseña de la DB (ojo si en tu modelo se llama contrasenia)
        // Si en tu base de datos la columna se llama 'contrasenia', cambialo acá a: usuarioEncontrado.contrasenia
        if (usuarioEncontrado.password !== password && usuarioEncontrado.contrasenia !== password) {
            return res.render('auth/login', { error: 'El email o la contraseña son incorrectos.' });
        }

        // GUARDADO EN SESIÓN FAKE
        req.session.user = {
            id: usuarioEncontrado.id,
            username: usuarioEncontrado.usuario || usuarioEncontrado.username
        };

        // REDIRECCIÓN DEFINITIVA: Rompe el bucle de carga y va al perfil
        return res.redirect('/perfil');

    } catch (error) {
        console.error("Error en el proceso de login:", error);
        res.status(500).send("Error interno del servidor al intentar iniciar sesión.");
    }
});

// 3. MOSTRAR REGISTRO (GET)
RegYLogin.get("/auth/signup", (req, res) => {
    res.render("auth/signup");
});

// 4. PROCESAR REGISTRO (POST)
RegYLogin.post("/auth/signup", async (req, res) => {
    try {
        const { usuario, contrasenia, email } = req.body;
        const ofertas = req.body.ofertas === 'on';
        const creado = await user.crearUsuario(usuario, contrasenia, email, ofertas);
        
        if (creado) {
            res.render('extra/welcome', { nombre: usuario });
        } else {
            res.end();
        }
    } catch (error) {
        console.error("Error en el registro:", error);
        res.status(500).send("Error interno del servidor");
    }
});

// 5. OTRAS RUTAS AUXILIARES
RegYLogin.get("/welcome", (req, res) => {
    res.redirect("/perfil"); // Corregido: res.render no lleva barra "/" adelante, mejor redireccionar
});

RegYLogin.get("/revisarEmail", async (req, res) => {
    const { email } = req.query;
    const respuesta = await user.revisarEmail(email);
    res.json({ respuesta });
});

RegYLogin.get("/revisarUsuario", async (req, res) => {
    const { usuario } = req.query;
    const respuesta = await user.revisarUsuario(usuario);
    res.json({ respuesta });
});

RegYLogin.get("/auth/logout", (req, res) => {
    // 1. Limpiamos el usuario de la sesión fake
    if (req.session) {
        req.session.user = null;
    }
    
    // 2. Opcional: Limpiamos también el objeto global por seguridad
    req.app.locals.sessionFake.user = null;

    // 3. Redireccionamos al login con un mensaje de éxito (opcional)
    res.render("auth/login", { error: "Sesión cerrada correctamente." }); 
});

export default RegYLogin;