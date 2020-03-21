const express = require('express')
const router = express.Router();

const { check } = require('express-validator')

const { getAllPoints,createPoint } =  require('../../controllers/expe') 

//@route    GET api/expe/all
//@desc     Get all points
//@access   Public
router.get('/all', getAllPoints)

module.exports = router;

//@route    POST api/expe
//@desc     Create info window
//@access   Public
router.post('/', [
  check("latitude", ""),
  check("longitude", ""),
  check("title", ""),
  check("description", ""),
  check("emoji", ""),
], createPoint)

module.exports = router;
