const mongoose = require('mongoose');
const db = require('..//config/db');
const UserModel = require('./user.model')

const { Schema } = mongoose;

const todoSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: UserModel.modelName,
    },
    title: {
        type: String,
        requried: true,
    },
    desc: {
        type: String,
        requried: true,
    }
});

const TodoModel = db.model('Todo', todoSchema);

module.exports = TodoModel;
