const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleoptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};

const bodyoptions = {
    describe: 'The body of the note',
    demand: true,
    alias: 'b'
};

const argv = yargs
             .command('add', 'Add a new note', {
                 title:titleoptions,
                 body:bodyoptions
             })
             .command('list', 'List all notes')
             .command('read', 'Read a note', {
               title:titleoptions
             })
             .command('remove', 'Remove a note', {
               title:titleoptions
             })
             .help()
             .argv;
var command = argv._[0];

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  if(_.isUndefined(note)){
    console.log("Duplicate note exists");
  }else{
    console.log("Adding note");
    notes.logNote(note);
  }
} else if (command === 'list') {
  var allNotes = notes.getAll();
  console.log(`Priting ${allNotes.length} note(s)`);
  allNotes.forEach((note) => notes.logNote(note));
} else if (command === 'read') {
  var note = notes.getNote(argv.title);
  console.log(note);
  if(_.isUndefined(note)){
    console.log("Note does not exist");
  }else{
    console.log("Viewing note");
    notes.logNote(note);
  }
} else if (command === 'remove') {
  var noteremoved = notes.removeNote(argv.title);
  var message = noteremoved ? 'Note was removed' : 'Note does not exist';
  console.log(message);
} else {
  console.log('Command not recognized');
}
