const router = require('express').Router({ mergeParams: true });
const CategoryModel = require('../models/category');

router.get('/', async (req, res) => {
  const foundCategory = await CategoryModel.find();
  res.json(foundCategory);
});

router.get('/:_category', async (req, res) => {
  const { _category } = req.params;
  const foundCategory = await CategoryModel.findById({ _id: _category });
  res.json(foundCategory);
});

router.post('/', async (req, res) => {
  const { data } = req.body;
  const createdCategory = await CategoryModel.create({
    ...data,
  });
  res.json(createdCategory);
});

router.put('/:_categoryId', async (req, res) => {
  const { _categoryId } = req.params;
  const { data } = req.body;
  const updatedCategory = await CategoryModel.findOneAndUpdate({ _id: _categoryId }, {
    ...data,
  });
  res.json(updatedCategory);
});

router.delete('/:_categoryId', async (req, res) => {
  const { _categoryId } = req.params;
  await CategoryModel.deleteOne({ _id: _categoryId });
  res.json({
    message: 'success',
  });
});

module.exports = router;
