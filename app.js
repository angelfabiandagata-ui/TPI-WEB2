import 'dotenv/config';
import express from 'express';
import pug from 'pug';
import { auth } from './middleware/auth.js';
import './models/sync.js';
import sequelize, { connectDatabase } from './models/config.js';
import RegYLogin from './controller/registroYLogin.js';
import perfilRoutes from './routes/perfilRoutes.js';

// CONSTANTES
const PORT = process.env.PORT;
const app = express();
  
app.locals.sessionFake = { user: null };

//cargar pug
app.set("view engine", "pug");
app.set('views', './views');

// MIDDLEWARES
app.use(express.static('public'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));
app.use(auth);
app.use((req, res, next) => {
    req.session = app.locals.sessionFake;    
    res.locals.userLogueado = req.session.user || null;
    next();
});
app.use(RegYLogin);
app.use(perfilRoutes);

// rutas
app.get("/",(req, res , next)=>{
    res.render("index");
})

app.get("/index",(req, res , next)=>{
    res.render("index");
})

app.get("/explorar",(req, res , next)=>{
    res.render("explorar");
})

app.get("/auth/login", (req, res) => {
    res.render("/auth/login"); 
});

app.get("/auth/signup", (req, res) => {
    res.render("/auth/signup"); 
});

app.locals.sessionFake = { 
    user: { id: 1, username: "Angel_Fabian" } 
};

app.use('/perfil', perfilRoutes);

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

