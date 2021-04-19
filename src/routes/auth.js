const router = require('express').Router();
const User = require('../models/user');

router.post('/login', async (req, res) => {
  const { data } = req.body;
  const user = await User.findOne({ email: data.email });
  if (!user) {
    res.json({
      error: 'No user found',
    });
  }
  const result = await User.comparePassword(user, data.password);
  if (!result) {
    res.json({
      error: 'Incorrect credentials',
    });
  }

  req.session.email = user.email;
  req.session.role = user.role;
  res.json({
    session: req.session,
    message: 'Success',
  });
});

router.post('/register', async (req, res) => {
  res.send('register test');
});

router.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.json({
      message: 'Logout successful',
    });
  });
});

module.exports = router;
