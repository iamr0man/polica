const Expe = require('../models/ExpeEntry');
const { validationResult } = require('express-validator')

exports.getAllPoints = async(req, res) => {
  const points = await Expe.find();
  res.status(201).json(points)
}

exports.createPoint = async(req, res) => {

  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({ errors: errors.array() })
  }
  
  const newExpe = await Expe.create(req.body);
  res.status(201).json({ newExpe });
}