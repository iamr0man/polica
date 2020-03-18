const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const requiredNumber = {
  type: Number,
  required: true,
};

const ExpeEntrySchema = new Schema({
    latitude: {
      ...requiredNumber,
      min: -90,
      max: 90,
    },
    longitude: {
      ...requiredNumber,
      min: -180,
      max: 180,
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    emoji: {
      type: String,
      required: true
    },
    data: {
        type: Date,
        default: Date.now
    }
});

module.exports = Expe = mongoose.model('expes', ExpeEntrySchema);