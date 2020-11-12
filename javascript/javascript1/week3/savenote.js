"use strict"

const notes = [];

function saveNote(content, id) {
  notes.push({content, id});
     
}
saveNote("Pick up groceries", 1);
saveNote("Do laundry", 2);
saveNote("go to walk", 3);

console.log(notes); 

//Retriving the specific id information

function getNote(id) {
    const match = notes.find(note => typeof id === 'number' && note.id === id);
    return match ? match : "ID is not a number and match not found.";
  }
  const firstNote = getNote(4);
console.log(firstNote);   

//find the all content text
  function logOutNotesFormatted(id) {
    for(let i=0;i<notes.length;i++){
        let id =notes[i].id;
        let content =notes[i].content;
        
        console.log("The note with id:" + id + " , has the following note text:" + content);
  }
        
    }

  logOutNotesFormatted(1); 

  //delete one element from the array of object
function deleteElementFromObject(id){
    
    for(let i=0;i<notes.length;i++){
        if(notes[i].id===id){
            const deletedElement=notes.splice(i,1);
            }
}
console.log(notes);
}
deleteElementFromObject(1)