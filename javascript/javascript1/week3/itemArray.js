"use strict"

const names = ["Peter","Ahmad", "Yana","kristina","Rasmus","Samuel","katrine","Tala"];
for (let i=0;i<names.length;i++){
  const nameToRemove ="Ahmad"
  if(names[i]==nameToRemove){
    names.splice(i,1) ;
  }
   
  }
  
console.log(names);
 