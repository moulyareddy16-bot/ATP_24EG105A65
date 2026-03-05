/* ASSIGNMENT 2:
-------------
Student Performance Dashboard

You are working on a college result analysis system. */


const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

//filter marks>=40
const passMarks=students.filter(stdObj=>stdObj.marks>=40);
console.log("pass marks: ",passMarks);

//map to add grade field
const add=students.map(stdObj=>{
    if(stdObj.marks>=90){
        stdObj.grade="A";
    }
    else if(stdObj.marks>=75){
        stdObj.grade="B";
    }
    else if(stdObj>=60){
        stdObj.grade="C";
    }
    else{
        stdObj.grade="D";
    }
    return stdObj;
});
console.log("after adding grade array is: ",add);

//reduce to calculate avgmarks
const sum=students.reduce((acc,stdObj)=>acc+stdObj.marks,0);
console.log("the average of marks is: ",sum/students.length);

//find the student who scored 92
const find=students.find(stdObj=>stdObj.marks===92);
console.log("student who scored 92 is: ",find);

//find index of student kiran
const findKiran=students.findIndex(stdObj=>stdObj.name==="Kiran");
console.log("index of kiran is: ",findKiran);