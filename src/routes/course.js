const express = require('express');
const router = express.Router();

const courseController = require('../app/controllers/CourseController');
router.get('/', courseController.show);
module.exports = router;
