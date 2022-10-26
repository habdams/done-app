const mongoose = require('mongoose');
const Schema = mongoose.Schema

// note schema
const noteSchema = new Schema({
    body: {
        type: String,
        required: true,
    },
    pinned: Boolean,
    favourite: Boolean,
}, {timestamps: true})

//  note model
const Note = mongoose.model('Note', noteSchema)

module.exports = Note