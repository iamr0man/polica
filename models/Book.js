const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const BookSchema = new Schema({
    logo: {
        type: String
    },
    title: {
        type: String,
        required: true
    },
    author: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = Book = mongoose.model('book', BookSchema);
