const router = require('express').Router();

router.post('/login', async (req, res) => {
  res.send('login test');
});

router.register('/register', async (req, res) => {
  res.send('register test');
});
