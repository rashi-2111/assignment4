const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const {
  addItem,
  getItems,
  updateItem,
  deleteItem
} = require('../controllers/itemController');

router.post('/', auth, addItem);
router.get('/',auth, getItems);
router.put('/:id', auth, updateItem);   // NEW
router.delete('/:id', auth, deleteItem);

module.exports = router;