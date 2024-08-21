import 'dotenv/config';
import express from 'express';
import userRoutes from './routes/userRoutes.mjs';
import auth from './middleware/auth.mjs';

const app = express();

app.use(express.json());

// Rutas de usuarios
app.use('/api/v1/users', userRoutes);

// Ejemplo de ruta protegida
app.get('/api/v1/protected', auth, (req, res) => {
  res.send('This is a protected route. You are authenticated.');
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Exportar la aplicación para las pruebas
export default app;
