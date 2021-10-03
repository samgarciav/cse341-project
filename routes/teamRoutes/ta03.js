//TA03 PLACEHOLDER
const express = require('express');
const router = express.Router();
const ta03controllers = require('../../controllers/teamControllers/ta03')

router.get('/', ta03controllers.getTa03);

module.exports = router;
