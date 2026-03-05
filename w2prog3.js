/* Assignment 3: Student Marks List
--------------------------------
Scenario : You receive marks from an exam system. */


const marks=[78,92,35,88,40,67];

//filter marks>=40 (pass marks)
const passMarks=marks.filter(element=>element>=40);
console.log("Pass marks are: ",passMarks);

//map to add 5 grace marks
const afterGraceMarks=marks.map(element=>element+5);
console.log("After adding grace marks: ",afterGraceMarks);

//reduce to find highest mark
const highestMark=marks.reduce((result,element)=>result>element?result:element);
console.log("highest mark is: ",highestMark);

//find first mark below 40
const firstBelow=marks.find(element=>element<40);
console.log("first mark below 40 is: ",firstBelow);

//find index of 92
const index=marks.findIndex(element=>element===92);
console.log("index of mar 92 is: ",index);
