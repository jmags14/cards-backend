const express = require('express');

const router = express.Router();

// GET /api/ping - Health check
router.get('/ping', (req, res) => {
  res.status(200).json({ message: 'Hello World' });
});

//if it start with auth or users it goes to that route instead /api/auth  or /api/users
router.use('/auth', require('./auth'));
router.use('/users', require('./users'));

module.exports = router;
