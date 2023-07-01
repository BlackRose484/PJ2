
const express = require('express');
const router = express.Router();

const MeController = require('../app/controllers/MeController');

router.get('/list',MeController.show);
router.get('/trash',MeController.trash);

module.exports = router;