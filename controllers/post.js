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
  if(!errors.isEmpty()){
    return res.status(400).json({ errors: errors.array() })
  }
  
  const { text, name, likes } = req.body;
  try{
    const user = await User.findById(req.user.id).select('-password') 
    const newPost = await Expe.create({
      user: user.id,
      text,
      name,
      avatar: user.avatar,
      likes
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