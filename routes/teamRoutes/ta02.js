const express = require('express');
const router = express.Router();

const ta02controllers = require('../../controllers/teamControllers/ta02');

router.get('/', ta02controllers.getTa02);
router.post('/add-user', ta02controllers.addUser);
router.post('/delete-user', ta02controllers.deleteUser);

module.exports = router;
