//Find the minimum mark in a marks Array


let marks=[90,78,65,98];
let min=marks[0];

for(let i=1; i<marks.length; i++){

    if(marks[i]<min){

        min=marks[i];

    }
}

console.log(`Min of mark is ${min}`);