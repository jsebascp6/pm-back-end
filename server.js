require('dotenv').config();
const express = require('express');
const app = express();
const userRoutes = require('./routes/userRoutes');
const auth = require('./middleware/auth');

app.use(express.json());

// Rutas de usuarios
app.use('/api/v1/users', userRoutes);

// Ejemplo de ruta protegida
app.get('/api/v1/protected', auth, (req, res) => {
  res.send('This is a protected route. You are authenticated.');
});

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

