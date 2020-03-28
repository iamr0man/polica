const Book = require('../models/Book');
const User = require('../models/User');
const { validationResult } = require('express-validator')

exports.getAllBooks = async(req, res) => {
  try{
    const books = await Book.find();
    res.status(201).json(books)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server error')
  }
}

exports.createBook = async(req, res) => {
  
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({ errors: errors.array() })
  }
  
  const { title, logo, author } = req.body;
  try{
    const user = await User.findById(req.user.id).select('-password') 
    const newBook = await Book.create({
      user: user.id,
      title,
      logo,
      author
    });
    res.status(201).json({ newBook });
    } catch (err) {
      console.error(err.message)
      res.status(500).send('Server error')
    }
}

exports.deleteBook = async(req, res) =>{

  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({ errors: errors.array() })
  }

  try{
    const book = await Book.findById(req.params.id)

    if (!book) {
        return res.status(404).json({ msg: 'Book not found' })
    }
    if (book.user.toString() !== req.user.id) {
        return res.status(401).json({ msg: 'User not authorized' })
    }

    await expe.remove()

    res.json({ msg: 'Book removed' })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server error')
  }
}