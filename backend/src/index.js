const express = require('express');
const cors = require('cors');

const app = express(); // Asegúrate de que esta línea existe

// Middleware
app.use(express.json());
app.use(cors());

// Importar rutas
const registroRoutes = require('./routes/registro.routes'); // Asegúrate de que el archivo existe
app.use('/api/registros', registroRoutes);

// Puerto del servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});

