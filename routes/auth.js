const express = require('express');
const router = express.Router();
const { emailer } = require('../controllers/auth');
router.post('/emailer', emailer);
module.exports = router;