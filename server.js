const express = require('express');
const app = express()
const books = require('./db.json')

// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

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

// create book
app.post('/books', (req, res)=>{
    books.push(req.body)
    res.status(201).json(req.body)
})

// update book by id
app.put('/books/:id', (req, res)=>{
    const updateIndex = books.findIndex(book => book.id === req.params.id)
    res.json(Object.assign(books[updateIndex], req.body))
})
app.listen(3000, () => {
    console.log('start server at port 3000');
})