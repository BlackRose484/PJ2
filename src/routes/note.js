
const express = require('express');
const router = express.Router();

const NoteController = require('../app/controllers/NoteController');

router.get('/create',NoteController.create);
router.post('/store',NoteController.store);
router.get('/:id/edit',NoteController.edit);
router.put('/:id',NoteController.update);
router.patch('/delete/:id',NoteController.deleteK);

module.exports = router;