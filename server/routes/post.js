const express = require('express');
const router = express.Router();

//import controllers 
const {create, read} = require('../controllers/post')

//import middleware


//api router
router.post("/posts",create);
router.get('/posts',read);

module.exports = router;