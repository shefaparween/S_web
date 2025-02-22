const express = require('express');
const router = express.Router();
const { submitAdmission } = require('../controllers/admissionController');

router.post('/submit', submitAdmission);

module.exports = router;