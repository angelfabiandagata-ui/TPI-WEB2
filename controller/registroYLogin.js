import express from 'express';
import { user } from '../models/user.js'

const RegYLogin = express.Router();

RegYLogin.get("/login", (req, res) => {
    res.render("login");
});

RegYLogin.post("/login", (req, res) => {
    const { email } = req.body;
    //res.render("extra/welcome", { email });
});

// registrarse
RegYLogin.get("/signup", (req, res) => {
    res.render("signup");
});

// recibir registro
RegYLogin.post("/signup", async (req, res) => {
    try {
        const { usuario, contrasenia, email} = req.body;
        const ofertas = req.body.ofertas === 'on';
        const creado = await user.crearUsuario(usuario, contrasenia, email, ofertas);
    if (creado) {
            res.render('extra/welcome', { nombre: usuario });
        } else {
            res.end()
        }
    } catch (error) {
        console.error("Error en el registro:", error);
        res.status(500).send("Error interno del servidor");
    }

    
});

RegYLogin.get("/welcome",(req,res)=>{
    res.render("/index")
})


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


export default RegYLogin;