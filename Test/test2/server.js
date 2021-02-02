const express = require('express');

const app = express();

const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();


app.get('/',function(req,res){
  res.send('Main page');
});

const MongoClient = require('mongodb').MongoClient;
const DATABASE_NAME = 'engine-dict';
const MONGO_URL ='mongodb://localhost:27017/${DATABASE_NAME}';
let db = null;
MongoClient.connect(MONGO_URL, function(err, database){
db=database;
});


