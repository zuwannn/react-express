const express = require('express');
const app = express()
const books = require('./db.json')


app.get('/', function(req, res){
    res.send('Hello World')
})

// get book by id
app.get('/books/:id', (req, res)=>{
    res.json(books.find(book => book.id === req.params.id))
})

// get all books
app.get('/books', (req, res)=>{
    res.json(books)
})


app.listen(3000, () => {
    console.log('start server at port 3000');
})