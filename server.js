const express = require('express');
const app = express();
const path = require('path')
const { Note, getNotes } = require('./models/Note');

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));



app.post('/api/notes', (req, res) => {
    const newNote = new Note(req.body.title, req.body.note)
    newNote.save()
    
    res.redirect('/')
})

app.get('/api/notes', (req, res) => {
    const notes = getNotes()
    res.send(notes)
})

app.get('*', (clientReq, serverRes) => {
    serverRes.sendFile(path.join(__dirname, '/public/index.html'))
})

app.listen(3333, () => console.log('port running on 3333'))