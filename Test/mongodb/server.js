const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const app = express();
app.use(express.static('public'));
const jsonParser = bodyParser.json();

app.get('/', function(req, res){
    res.send('Main page');
})


const DATABASE_NAME = 'engine-dict';
const MONGO_URL ='mongodb://localhost:27017/${DATABASE_NAME}';
let db = null;
let collection = null;

//callback version
// MongoClient.connect(MONGO_URL, {useNewUrlParser: true}, function(err, database){
//     if(err){
//         console.log(err);
//         return;
//     }
//     db = database.db(DATABASE_NAME);
//     console.log(db);
//     collection = db.collection('word');
//     console.log('Connecting to mongo db');
// })

//promise
// function onConnected(err, database){
//     if (err){
//         console.log(err);
//         return;
//     }
//     db = database;
//     console.log('Connecting to mongo db');
// }
// MongoClient.connect(MONGO_URL, {useNewUrlParser :true}).then(onConnected);


// async (recommend use)

// async function main(){
//     // if (err){
//     //     console.log(err);
//     //     return;
//     // }
//     const client = await
//     MongoClient.connect(MONGO_URL);
//     db = await client.db(DATABASE_NAME);
//     collection = await db.collection('words');
//     console.log('connecting to mongo db');
// }

// insert a student
async function insertStudent(){
    const newStudent = {
        name: "Dinh Viet Trung",
        studentID: "18126035",
        dateOfBirth: new Date("June 2, 1999"),
        class : "18VP"
    }
    const result = await collection.insertOne(newStudent);
    if(result){
        console.log(`One student inserted with obj id= ${result.studentID}`);
    }
        else{
            console.log('Error');
            return;
        
    }
}

//find student
async function findStudent(id){
    const query = {studentID: id};
    const response = await collection.findOne(query);
    if(response){
        console.log("student found!");
        console.log(response);
    }
    else{
        console.log("No student found. Error!");
    }
}

main(); // main is always at the end if use async