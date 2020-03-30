const mongoose = require('mongoose');
const schema = mongoose.Schema;

var TaskSchema = new schema({
    title: {
        type: String,
        required: true,
        minlength: 6,
        trim: true
    },
    description: String,
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    },
    _creator: {
        type: mongoose.Schema.Types.ObjectId,
    },
    parent: {
        type: mongoose.Schema.Types.ObjectId,
        default: null
    }
}, {autoIndex: false});

var Task = mongoose.model('Task', TaskSchema);

module.exports = {Task}