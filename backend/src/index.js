// backend/src/index.js
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose'); // Asegúrate de tener mongoose instalado

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Importar rutas
const registroRoutes = require('./routes/registro.routes');
app.use('/api/registros', registroRoutes);

// Conexión a la base de datos
const dbUri = 'mongodb://localhost:27017/tu_base_de_datos'; // Cambia esto a tu URI de conexión
mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Conectado a la base de datos'))
  .catch(err => console.error('Error al conectar a la base de datos:', err));

// Puerto del servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
