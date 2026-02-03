const express = require('express');
const { createNotes, featchAllNotes, getSingleByIdNotes, deleteNotes, updateNotes, searchNotes } = require('../controllers/notesController');
const createNotesLimit = require('../middlewares/createNoteLimiter');
const router = express.Router()
router.post('/notes', createNotesLimit, createNotes);
router.get('/notes', featchAllNotes)
router.get("/notes/search", searchNotes)
router.get('/notes/:id', getSingleByIdNotes)
router.delete('/notes/:id', deleteNotes)
router.put('/notes/:id', updateNotes);

module.exports = router