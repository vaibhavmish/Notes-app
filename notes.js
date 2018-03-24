var fs=require("fs")

console.log("starting notes.js")

var fetchNotes=()=>
{
    try{
        var noteString=fs.readFileSync("notes-node.json");
        return JSON.parse(noteString);
    }
    catch (e){
       return notes=[];
    }
}
var saveNotes=(notes)=>{
    fs.writeFileSync("notes-node.json",JSON.stringify(notes));
}
var addNote=(title,body)=>{

    var note={
        title,
        body
    }
    var notes=fetchNotes();
    var duplicateNodes=notes.filter((note)=>note.title===title);
    if(duplicateNodes.length===0){
        notes.push(note);
        saveNotes(notes);
        return note;
    }


}
var removeNote=(title)=>{
    var notes=fetchNotes();
    var filteredNotes=notes.filter((note)=>note.title!==title);
    saveNotes(filteredNotes);
    return notes.length!==FilteredNotes.length;

}

var getAll=()=>{
    return fetchNotes();

}

var readNote=(title)=>{
     var notes=fetchNotes();
     var toReadNote=notes.filter((note)=>note.title===title);

return toReadNote[0];
}
var logNotes=(note)=>{
    console.log("--------");
    console.log(`title ${note.title}`);
    console.log(`body ${note.body}`);

}

module.exports={
    addNote,
        removeNote,
        readNote,
        getAll,
    logNotes
}