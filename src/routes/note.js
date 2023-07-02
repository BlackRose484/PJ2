
const express = require('express');
const router = express.Router();

const NoteController = require('../app/controllers/NoteController');

router.get('/create',NoteController.create);
router.post('/store',NoteController.store);
router.get('/:id/edit',NoteController.edit);
router.patch('/:id/done',NoteController.done);
router.patch('/:id/undone',NoteController.undone);
router.put('/:id',NoteController.update);
router.patch('/delete/:id',NoteController.deleteK);

module.exports = router;