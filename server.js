const express = require("express");
const app = express();
const path = require("path");
const { Note, getNotes } = require("./models/Note");
const fs = require("fs");
const PORT = process.env.PORT || 3000

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

app.delete("/api/notes/:id", (req, res) => {
  const noteId = req.params.id;
  let notes = getNotes();
  notes = notes.filter((note) => note.id !== noteId);

  fs.writeFileSync("./db/db.json", JSON.stringify(notes));

  res.redirect("/");
});

app.post("/api/notes", (req, res) => {
  const newNote = new Note(req.body.title, req.body.note);
  newNote.save();

  res.redirect("/");
});

app.get("/api/notes", (req, res) => {
  const notes = getNotes();
  res.send(notes);
});

app.get("*", (clientReq, serverRes) => {
  serverRes.sendFile(path.join(__dirname, "/public/index.html"));
});

app.listen(PORT, () => console.log("port running on 3333"));
