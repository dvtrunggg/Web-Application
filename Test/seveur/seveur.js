// const express = require('express');
// const app = express();
// app.get('/', function(req,res){
//     res.send('Hello Worldddd');
// });

// app.listen(3000,function(){
//     console.log('Example app listen on port 3000.');
// });

// app.get('/trung', function(req,res){
//     res.send('Hello ');
// });

const express = require('express')
const app = express();
// const queryParams = req.query;
// const name = queryParams.name;


app.get('/', function(req, res){
    res.send('Main page');
});

app.get('/hello', function(req, res){
    const queryParams = req.query;
    console.log(queryParams);
    const name = queryParams.name;
    res.send('Hello ' + name);
});

app.post('/hello', function(req, res){
    res.send('post hello');
})




app.get('/hello/:name',function(req,res){
    const routeParams = req.params;
    const name = routeParams.name;
    res.send('GET hello, ' + name);
    });

    app.listen(3000,function(){
        console.log('Example app listen on port 3000.');
    });
    
app.get('/json', function(req,res){
        const response = {
            greeting: 'Hello world',
            awesome:true
        };
        res.json(response);
        });