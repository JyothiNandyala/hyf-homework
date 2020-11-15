
const class07Students = [];
function addStudentToClass(studentName){
  
  if(studentName===""){
    console.log("You can not able to add empty string to the class.");
  }
  else if(class07Students.includes(studentName)){
    console.log(" Student " + studentName  + " is already in the class");
  }
else if(studentName==="Denmark Queen"){
  class07Students.push(studentName);
}
else if(class07Students.length>=6){
    
  console.log("Cannot add more students to class 07.");
}else{
  class07Students.push(studentName);
  return class07Students;
}

}

addStudentToClass("jyothi")
addStudentToClass("sandhana")
addStudentToClass("rajani")
addStudentToClass("charmi")
addStudentToClass("Denmark Queen")
addStudentToClass("Denmark Queen")
addStudentToClass("Nitheesha")


console.log(class07Students);

function getNumberOfStudents() {
  // You write code here
  const length=class07Students.length;
  
  console.log("nuber of students is " + length );
}

getNumberOfStudents()