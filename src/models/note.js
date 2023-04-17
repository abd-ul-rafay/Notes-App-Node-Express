const mongoose = require("mongoose");

const noteSchema = mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true,
    },
    user_id: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
    },
    date_added: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model("Notes", noteSchema);
