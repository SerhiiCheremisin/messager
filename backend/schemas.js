const mongoose = require('mongoose');

const UsersSchema = new mongoose.Schema({
  name: String,
  lastName: String,
  password: String,
  nickName: String,
})

const MessagesSchema = new mongoose.Schema({
  from : String,
  to: String,
  date: String,
  message: String,
})


const UsersModel = mongoose.model('users', UsersSchema, 'users');
const MessagesModel = mongoose.model('messages', MessagesSchema, 'messages');

module.exports = { UsersModel, MessagesModel }