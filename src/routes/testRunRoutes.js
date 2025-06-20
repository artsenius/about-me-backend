const express = require('express');
const router = express.Router();
const testRunController = require('../controllers/testRunController');

router.get('/', testRunController.getTestRuns);
router.post('/', testRunController.createTestRun);

module.exports = router;
