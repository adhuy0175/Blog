const express = require('express');
const router = express.Router();

const userController = require('../app/controllers/UserController');

router.get('/user/all', userController.show);
router.post('/create', userController.create);
router.use(':id/edit', userController.update);
router.put('/:id', userController.update);
router.delete('/:id', userController.delete);
router.get('/:id', userController.showById);
router.post('/', (req, res) => res.send('Register'));
module.exports = router;
