const Expe = require('../models/ExpeEntry');
const User = require('../models/User');
const { validationResult } = require('express-validator')

exports.getAllPoints = async(req, res) => {
  try{
    const points = await Expe.find();
    res.status(201).json(points)
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server error')
  }
}

exports.createPoint = async(req, res) => {
  
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({ errors: errors.array() })
  }
  
  const { latitude, longitude, title, description, emoji } = req.body;
  try{
    const user = await User.findById(req.user.id).select('-password') 
    const newExpe = await Expe.create({
      user: user.id,
      latitude,
      longitude,
      title,
      description,
      emoji
    });
    res.status(201).json({ newExpe });
    } catch (err) {
      console.error(err.message)
      res.status(500).send('Server error')
    }
}

exports.deletePoint = async(req, res) =>{

  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({ errors: errors.array() })
  }

  try{
    const expe = await Expe.findById(req.params.id)

    if (!expe) {
        return res.status(404).json({ msg: 'Expe not found' })
    }
    if (expe.user.toString() !== req.user.id) {
        return res.status(401).json({ msg: 'User not authorized' })
    }

    await expe.remove()

    res.json({ msg: 'Expe removed' })
  } catch (err) {
    console.error(err.message)
    res.status(500).send('Server error')
  }
}