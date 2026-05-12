import {
    getPublicacion } from "../models/fotaza.js";


export async function getpublicacion(req, res, options = {}) {
    try {
        const publicacion = await getPublicacion();
        res.render('publicacion/index', { publicacion: publicacion, ...options });
    } catch (error) {
        console.error('Error al leer el archivo de publicacion:', error);
        res.status(500).send('Error al cargar la publicacion');
    }
}
