const express = require('express')
const router = express.Router();

const auth = require('../../middleware/auth')  
const { check } = require('express-validator')

const { getAllPosts, createPost, deletePost } =  require('../../controllers/post') 

//@route    GET api/post/all
//@desc     Get all posts
//@access   Public
router.get('/all', getAllPosts)

//@route    POST api/post
//@desc     Create info window
//@access   Public
router.post('/', [
  auth,
  check("latitude", ""),
  check("longitude", ""),
  check("title", "").not().isEmpty(),
  check("description", ""),
  check("emoji", ""),
], createPost)

//@route    DELETE api/post/:id
//@desc     Delete post
//@access   Private
router.delete('/:id', [
  auth,
  check("id", ""),
], deletePost)

module.exports = router;
