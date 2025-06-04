const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({



    description: { type: String, required: true },
    completed: { type: boolean, default: false },
    priority:  { type: String,  enum: ['Low', 'Medium', 'High'], default: 'Medium'},
    dueDate : { type: Date }});
    module.exports = mongoose.module( 'Task , TaskSchema');
