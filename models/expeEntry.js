const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const requiredNumber = {
  type: Number,
  required: true,
};

const ExpeEntrySchema = new Schema({
    user: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    },
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
    likes: [
      {
        user: {
            type: Schema.Types.ObjectId,
            ref: 'users'
        }
      }
  ],
    data: {
        type: Date,
        default: Date.now
    }
});

module.exports = Expe = mongoose.model('expes', ExpeEntrySchema);