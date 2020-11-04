
const class07Students = [];
function addStudentToClass(studentName){
  
if(studentName==="Denmark Queen"){
     if(class07Students.length<6 || class07Students.length>=6){
    class07Students.push(studentName);

  }
}
  else if(class07Students.length>=6){
    
      console.log("Cannot add more students to class 07.");
  }
  else if(class07Students.includes(studentName)){
    console.log(" Student " + studentName  + " is already in the class");
  }
  
  else if(studentName===""){
console.log("You can not able to add empty string to the class.");
  }else{
    class07Students.push(studentName);
    return class07Students;
  }

}
//console.log(class07Students);
addStudentToClass("jyothi")
addStudentToClass("sandhana")
addStudentToClass("rajani")
addStudentToClass("charmi")
addStudentToClass("tithi")
addStudentToClass("Denmark Queen")
addStudentToClass("Nitheesha")


console.log(class07Students);

function getNumberOfStudents() {
  // You write code here
  var length=class07Students.length;
  //return length;
  console.log("nuber of students is " + length );
}

//getNumberOfStudents()