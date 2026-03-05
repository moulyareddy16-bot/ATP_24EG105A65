/* Assignment 2: Online Course Name Processor
------------------------------------------
Scenario : You are preparing a course list for display on a website. */


const courses=["javascript","react","node","mongodb","express"];

//filter name length>5
const nameLen=courses.filter(element=>element.length>5);
console.log("courses length having more than 5 is: ",nameLen);

//map names in uppercase
const nameUpperCase=courses.map(element=>element.toUpperCase());
console.log("courses names in upper case are: ",nameUpperCase);

//reduce to generate a single string
const singleStr=courses.reduce((result,element)=> result + " | " + element);
console.log("single string is: ",singleStr);

//find the course react
const findReact=courses.find(element=>element==="react");
console.log(findReact);

//find index of node
const nodeIndex=courses.findIndex(element=>element==="node");
console.log(nodeIndex);
