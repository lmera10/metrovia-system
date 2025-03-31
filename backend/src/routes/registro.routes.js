// backend/src/routes/registro.routes.js
const express = require('express');
const { body, validationResult } = require('express-validator');
const router = express.Router();
const Registro = require('../models/registroModel');

// Ruta para obtener todos los registros
router.get('/registros', async (req, res) => {
    try {
        const registros = await Registro.find();
        res.json(registros);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los registros' });
    }
});

// Añadir un nuevo registro con validación
router.post('/registros', 
    body('nombre').notEmpty().withMessage('El nombre es requerido'),
    body('correo').isEmail().withMessage('Debe ser un correo válido'),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        try {
            const nuevoRegistro = new Registro(req.body);
            await nuevoRegistro.save();
            res.status(201).json(nuevoRegistro);
        } catch (error) {
            res.status(500).json({ error: 'Error al crear el registro' });
        }
    }
);

router.get('/mensaje', (req, res) => {
    res.json({ mensaje: '¡Hola desde el backend!' });
});

// Actualizar un registro existente
router.put('/registros/:id', async (req, res) => {
    try {
        const registroActualizado = await Registro.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!registroActualizado) {
            return res.status(404).json({ error: 'Registro no encontrado' });
        }
        res.json(registroActualizado);
    } catch (error) {
        res.status(500).json({ error: 'Error al actualizar el registro' });
    }
});

// Eliminar un registro
router.delete('/registros/:id', async (req, res) => {
    try {
        const registroEliminado = await Registro.findByIdAndDelete(req.params.id);
        if (!registroEliminado) {
            return res.status(404).json({ error: 'Registro no encontrado' });
        }
        res.json({ message: 'Registro eliminado correctamente' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el registro' });
    }
});

module.exports = router;