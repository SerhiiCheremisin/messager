const express = require('express');
const app = express();
const port = 3200;
require('dotenv').config();
const cors = require('cors');
const bdApi = require('./schemas');
const mongoose = require('mongoose');

const mongoUser = process.env.USER_NAME;
const mongoPassword = process.env.DATABASE_KEY;

app.use(express.json());
app.use(cors({
  origin: '*'
}));

const mongoConnect = async () => {
    try {
     await mongoose.connect(`mongodb+srv://${mongoUser}:${mongoPassword}@cluster0.vxtbj.mongodb.net/?retryWrites=true&w=majority`, {dbName: "messages"});
    }
    catch (error) {
     console.log(`you got an error : ${error}`)
    }
 };

app.listen(port, () => {
  console.log(`The backend is working on port ${port}`)
  mongoConnect()
  .then( () => console.log("Mongo is running"))
  .catch( (error) => console.log(`you got an error : ${error}`) )
});

app.get('/', (req, res) => {
    res.send('You got the messege')
  });

app.get('/users', (req, res) => {
    const userList = async( ) => {
    await bdApi.UsersModel.find({})
    .then( data => {
     res.send(data)
 })
   }
   userList();
 });

 app.post('/users', (req, res) => {
  
 })