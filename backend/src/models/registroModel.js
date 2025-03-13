const mongoose = require('mongoose');

const registroSchema = new mongoose.Schema({
  nombre: String,
  correo: String,
  telefono: String
});

module.exports = mongoose.model('Registro', registroSchema);
