/* Assignment 1: Daily Temperature Analyzer
----------------------------------------
Scenario : You are analyzing daily temperatures recorded by a weather app. */


const temperatures=[32,35,28,40,38,30,42];

  //filter temp above 35
  const temp_above_35=temperatures.filter((element)=>element>35);
  console.log("temperatures above 35 are: ",temp_above_35);

  //map to convert C to F
  const temp_F=temperatures.map((element)=>(element*(9/5))+32);
  console.log("temperatures in fahrenheit are: ",temp_F);

  //reduce to avg of temp
  const sum=temperatures.reduce((result,element)=>result+element);
  console.log("the average of temperatures is: ",sum/temperatures.length);

  //find() first temp above 40
  const temp_first=temperatures.find(element=>element>40);
  console.log("first temperature greater than 40 is: ",temp_first);

  //findIndex of temp 28
  const temp_index=temperatures.findIndex(element=>element===28);
  console.log("index of temp 28 is: ",temp_index);