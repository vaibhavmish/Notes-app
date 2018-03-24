console.log("starting app.js");
const notes=require("./notes.js");
const yargs=require("yargs");

var argv=yargs.argv;
var command=process.argv[2];
console.log("Command :",command);
console.log("Yargs :",argv);
if(command==="add"){
    var note=notes.addNote(argv.title,argv.body);
if(note){
    console.log("note created");
    notes.logNotes(note);
}
else{
    console.log("note title exists");
}
}
else if(command==="read"){
  var note =notes.readNote(argv.title);
    if(note){
        console.log("note is read ");
notes.logNotes(note);
    }
  else {
      console.log("title not found");
  }
}
else if(command==="list") {
    var allNotes=notes.getAll();
    console.log(`printing ${allNotes.length} note(s)`);
    allNotes.forEach((note)=>notes.logNotes(note));
}
else if(command==="remove") {
   var noteRemoved= notes.removeNote(argv.title);
   var message=noteRemoved ? "Note was removed ":"not was not removed";
   console.log(message);
}
else{
    console.log("unrecognized command");
}