const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController');

//siteController.index;
router.post('/register', siteController.register);
router.get('/', siteController.index);

module.exports = router;
