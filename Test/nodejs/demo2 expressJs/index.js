const express = require('express');
const app = express();
const port = 3000;

// const books = [
//     {
//         'id': 1, 
//         'name': 'Web Programming', 
//         'price': 1000
//     }, 
//     {
//         'id': 2, 
//         'name': 'Mobile Development', 
//         'price': 2000
//     }, 
//     {
//         'id': 3, 
//         'name': 'Data Structure', 
//         'price': 1500
//     },
// ]

//viết cái books kiểu json trong file books.js

const books = require('./books').books



//giao thức get (lấy data - select in sql)
app.get('/', (req,res)=>{
    res.send('<h1>Hello world!!!!</h1>');

});


//giao thức post (insert data in sql)
app.post('/', (req,res)=>{
    res.send('Post Hello');
})

//giao thức put (updata data in sql) function(req, res){} là cách viết khác của (req, res) =>{} 
app.put('/', function(req,res){
    res.send('Put Hello');
})

//giao thức delete (delete data)
app.delete('/', function(req, res) {
    res.send('Delete Hello')
})

app.get('/books', (req, res) =>{
    res.send(books);
})

app.get('books/:id', (req, res)=>{
    let id = req.params['id'];
    res.send(books.filter(item =>item.id == id));

})

app.listen(port, () =>{
    console.log('Server is running at ' + port);
});