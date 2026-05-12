import fs from 'fs/promises';
import path from 'path';

export const getPublicacion = async (req, res) => {
    try {
        const fotoPath = path.join(process.cwd(), 'public', 'fotaza.jpg');
        await fs.access(fotoPath);
        res.sendFile(fotoPath);
    } catch (error) {
        res.status(404).send('Fotaza no encontrada');
    }
};