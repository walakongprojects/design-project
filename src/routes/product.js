const router = require('express').Router({ mergeParams: true });
const ProductModel = require('../models/product');

router.get('/', async (req, res) => {
  const foundProducts = await ProductModel.find();
  res.json(foundProducts);
});

router.get('/:_id', async (req, res) => {
  const { _id } = req.params;
  const foundProduct = await ProductModel.findById({ id: _id });
  res.json(foundProduct);
});

router.post('/', async (req, res) => {
  const { data } = req.body;
  const createdProduct = await ProductModel.create({
    ...data,
    role: 9,
  });
  res.json(createdProduct);
});

router.put('/:_id', async (req, res) => {
  const { _id } = req.params;
  const { data } = req.body;
  const updatedProduct = await ProductModel.findOneAndUpdate({ id: _id }, {
    ...data,
  });
  res.json(updatedProduct);
});

router.delete('/:_id', async (req, res) => {
  const { _id } = req.params;
  await ProductModel.deleteOne({ id: _id });
  res.json({
    message: 'success',
  });
});

module.exports = router;
