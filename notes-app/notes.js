const fs = require('fs')


let fetchNotes = () => {
  try {
    let notesString = fs.readFileSync('notes-data.json')
    return JSON.parse(notesString);
  } catch(e) {
    return []
  }
}

let saveNotes = (notes) => {
  fs.writeFileSync('notes-data.json', JSON.stringify(notes));
}

let addNote= (title, body) => {
  var notes = fetchNotes();
  let note = {
    title,
    body
  };
  let duplicateNotes = notes.filter((note) => note.title === title)
  
  if (duplicateNotes.length === 0){
    notes.push(note);
    saveNotes(notes);
    return note
  }
}

let getAll = () => {
  return fetchNotes();
}

let getNote = (title) => {
  let notes = fetchNotes();
  let filteredNotes = notes.filter((note) => note.title === title)

  return filteredNotes[0];
}

let removeNote = (title) => {
  let notes = fetchNotes();
  let filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);
  return notes.length != filteredNotes.length
}

let logNote = (note) => {

  debugger
  console.log('--');
  console.log(`title: ${note.title}`);
  console.log(`body: ${note.body}`)
}
module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote,
}