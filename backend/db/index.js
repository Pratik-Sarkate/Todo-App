const mongoose = require("mongoose");
const { mongodbURL } = require("../config/index");
mongoose.connect(mongodbURL);

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: {type: Boolean, default: false}
})

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    todos: [String]
})

const Todo = mongoose.model("Todo", todoSchema);
const User = mongoose.model("User", userSchema);

module.exports = {
    Todo,
    User
}