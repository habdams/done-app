const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const Note = require('./model/note')

const dbURI = 'mongodb+srv://teejay:admin-94@doneapp-db.839pr0y.mongodb.net/notes?retryWrites=true&w=majority'

mongoose.connect(dbURI)
.then((result) => {
    console.log("connected to db");
    app.listen(3001)  
})
.catch((err) => {
    console.log(err);
})

//create express app
const app = express();

// middleware
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(morgan('dev'))

//routes
app.get('/',(req,res) => {
    Note.find()
        .then((result) => {
        result.length <= 0 ? res.send('<p> No notes yets <p>') : res.send(`<p>${result}<p>`);
        })
        .catch((err) => {
        console.log(err);
        })
})

app.post('/add', (req, res) => {
    const note = new Note(req.body)
    note.save()
        .then((result) => {
            res.redirect('/')
        })
        .catch((err)=>{
            console.log(err);
        })

})
