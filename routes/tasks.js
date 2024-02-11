const express = require('express');
const router = express.Router();
const usersRoutes = require('./task');

router.use('/', usersRoutes);

module.exports = router;