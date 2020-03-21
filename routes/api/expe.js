const express = require('express')
const router = express.Router();

const auth = require('../../middleware/auth')  
const { check } = require('express-validator')

const { getAllPoints,createPoint,deletePoint } =  require('../../controllers/expe') 

//@route    GET api/expe/all
//@desc     Get all points
//@access   Public
router.get('/all', getAllPoints)

//@route    POST api/expe
//@desc     Create info window
//@access   Public
router.post('/', [
  auth,
  check("latitude", ""),
  check("longitude", ""),
  check("title", "").not().isEmpty(),
  check("description", ""),
  check("emoji", ""),
], createPoint)

//@route    DELETE api/expe
//@desc     Delete info window
//@access   Private
router.delete('/', [
  auth,
  check("id", ""),
], deletePoint)

module.exports = router;
