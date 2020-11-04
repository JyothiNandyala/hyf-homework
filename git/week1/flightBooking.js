
function getFullname(firstname ,surname) {
    
    return firstname + ' ' + surname;
    
    }
const fullName=getFullname("jyothi" ,"Nandyala");
console.log(fullName);


//Creating two varables

var fullName1=getFullname("sree" ,"Nani");
var fullName2=getFullname("Nitheesha" ,"Venkata");
console.log(fullName1);
console.log(fullName2);

//Formal FullName

function getFullname(firstname ,surname,useFormalName){
    if(useFormalName){
        return "Lord" + ' ' + firstname + ' ' + surname;
        
    }
    else{
        return firstname + ' ' + surname;
    }
}
const fullName3=getFullname("Gajjala", "Padma", true); 
const fullName4=getFullname("Gajjala", "Padma", false);
console.log(fullName3);
console.log(fullName4);