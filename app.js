import 'dotenv/config';
import express from 'express';
import pug from 'pug';
import { auth } from './middleware/auth.js';
import './models/sync.js';
import sequelize, { connectDatabase } from './models/config.js';


// CONSTANTES
const PORT = process.env.PORT;
const app = express();

//cargar pug
app.set("view engine", "pug");
app.set('views', './views');

// MIDDLEWARES
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// rutas
app.get("/",(req, res , next)=>{
    res.render("index");
})

app.get("/index",(req, res , next)=>{
    res.render("index");
})

app.get("/login",(req, res , next)=>{
    res.render("login");
})


// lisener del servidor y conexion a la base de datos
connectDatabase()
  .then(() => {
    app.listen(PORT, (err) => {
      if (err) {
        console.error(" [X] Error al iniciar el servidor: ", err);
      }
      console.log(` [✓] Servidor corriendo en el puerto:${PORT}`);
    });
  })
  .catch((err) => {
    console.error(" [X] Error al conectar a la base de datos: ", err);
  });

