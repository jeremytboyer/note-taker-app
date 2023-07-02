const { v4 } = require("uuid");
const fs = require("fs");
const path = require("path");

const DB_PATH = path.join(__dirname, "../db/db.json");

function getNotes() {
  const notes = JSON.parse(fs.readFileSync(DB_PATH, "utf8"));
  return notes;
}

class Note {
  constructor(title, text) {
    this.id = v4();
    this.title = title;
    this.text = text;
  }
  save() {
    const notes = getNotes();
    notes.push(this);

    fs.writeFile(DB_PATH, JSON.stringify(notes, null, 2), (err) => {
      if (err) throw err;
    });
  }
}

module.exports = { Note: Note, getNotes: getNotes };
