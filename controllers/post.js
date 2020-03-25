const Post = require('../models/Post');
const User = require('../models/User');
const { validationResult } = require('express-validator')

exports.getAllPosts = async(req, res) => {
  try{
    const posts = await Post.find();
    res.status(201).json(posts)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server error')
  }
}

exports.createPost = async(req, res) => {
  
  const errors = validationResult(req);
  console.log(errors)
  if(!errors.isEmpty()){
    return res.status(400).json({ errors: errors.array() })
  }
  
  const { title, preview, description, shortDescription, name } = req.body;
  console.log(req.body)
  try{
    console.log(req.user.id)
    const user = await User.findById(req.user.id).select('-password') 
    const newPost = await Post.create({
      user: user.id,
      avatart: user.avatar,
      title,
      shortDescription,
      preview,
      description,
      name,
      avatar: user.avatar,
    });
    res.status(201).json({ newPost });
    } catch (err) {
      console.error(err.message)
      res.status(500).send('Server error')
    }
}

exports.deletePost = async(req, res) =>{

  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({ errors: errors.array() })
  }

  try{
    const post = await Post.findById(req.params.id)

    if (!post) {
        return res.status(404).json({ msg: 'Post not found' })
    }
    if (post.user.toString() !== req.user.id) {
        return res.status(401).json({ msg: 'User not authorized' })
    }

    await expe.remove()

    res.json({ msg: 'Post removed' })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server error')
  }
}