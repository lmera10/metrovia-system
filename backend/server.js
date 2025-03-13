const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

// Middleware
app.use(cors()); // Permite que Angular acceda a la API
app.use(bodyParser.json()); // Permite recibir datos en formato JSON

// Ruta de prueba
app.get("/api/mensaje", (req, res) => {
  res.json({ mensaje: "¡Hola desde el backend en Node.js!" });
});

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
