/*Create a function that receives any number of parameters as arguments
and return their sum using REST parameter  */


const result=(...nums)=>{
   return nums.reduce((acc,ele)=>acc+ele);
}
console.log(result(1,2,3,4));