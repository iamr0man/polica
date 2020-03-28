const express = require('express')
const router = express.Router();

const auth = require('../../middleware/auth')  
const { check } = require('express-validator')

const { getAllBooks, createBook, deleteBook } =  require('../../controllers/book') 

//@route    GET api/book/all
//@desc     Get all books
//@access   Public
router.get('/all', getAllBooks)

//@route    POST api/book
//@desc     Create book
//@access   Private

router.post('/', [
  auth,
  check("title", "").not().isEmpty(),
  check("logo", "").not().isEmpty(),
  check("author", "").not().isEmpty(),
], createBook)

//@route    DELETE api/book/:id
//@desc     Delete book
//@access   Private
router.delete('/:id', [
  auth,
  check("id", ""),
], deleteBook)

module.exports = router;
