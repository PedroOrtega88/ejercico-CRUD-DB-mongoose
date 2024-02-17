const express = require('express');
const router = express.Router();
const Task = require('../models/Task');

// Ruta para crear una tarea
router.post('/create', async (req, res) => {
    try {
        const task = await Task.create({ ...req.body, completed: false });
        res.status(201).json(task);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al crear la tarea' });
    }
});

// Ruta para obtener todas las tareas
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener las tareas' });
    }
});

// Ruta para obtener una tarea por su ID
router.get('/id/:_id', async (req, res) => {
    try {
        const task = await Task.findById(req.params._id);
        if (!task) {
            return res.status(404).json({ error: 'Tarea no encontrada' });
        }
        res.json(task);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al obtener la tarea' });
    }
});

// Ruta para marcar una tarea como completada
router.put('/markAsCompleted/:_id', async (req, res) => {
    try {
        const task = await Task.findByIdAndUpdate(req.params._id, { completed: true }, { new: true });
        if (!task) {
            return res.status(404).json({ error: 'Tarea no encontrada' });
        }
        res.json(task);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al marcar la tarea como completada' });
    }
});

// Ruta para eliminar una tarea por su ID
router.delete('/id/:_id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params._id);
        if (!task) {
            return res.status(404).json({ error: 'Tarea no encontrada' });
        }
        res.json({ mensaje: 'Tarea eliminada exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error al eliminar la tarea' });
    }
});

module.exports = router;
