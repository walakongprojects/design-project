const router = require('express').Router({ mergeParams: true });
const UserModel = require('../models/user');

router.get('/', async (req, res) => {
  const foundUsers = await UserModel.find();
  res.json(foundUsers);
});

router.get('/:_id', async (req, res) => {
  const { _id } = req.params;
  const foundUser = await UserModel.findById({ id: _id });
  res.json(foundUser);
});

router.post('/', async (req, res) => {
  const { data } = req.body;
  console.log('aaaa');
  console.log(data);
  const createdUser = await UserModel.create({
    ...data,
    role: 9,
  });
  res.json(createdUser);
});

router.put('/:_id', async (req, res) => {
  const { _id } = req.params;
  const { data } = req.body;
  const updatedUser = await UserModel.findOneAndUpdate({ id: _id }, {
    ...data,
  });
  res.json(updatedUser);
});

router.delete('/:_id', async (req, res) => {
  const { _id } = req.params;
  await UserModel.deleteOne({ id: _id });
  res.json({
    message: 'success',
  });
});

module.exports = router;
