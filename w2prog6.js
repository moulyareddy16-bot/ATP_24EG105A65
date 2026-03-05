/* ASSIGNMENT 3:
-------------
Employee Payroll Processor

You are building a salary processing module in a company HR app. */


const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

//filter() employees from IT department
const itDept=employees.filter(emp=>emp.department==="IT");
console.log("employees of IT dept are: ",itDept);

//map() to add: netSalary = salary + 10% bonus
const add=employees.map(emp=>{
  emp.netSalary=emp.salary + (emp.salary)*0.10;
  return emp;
});
console.log("After adding netSalary field: ",add);

//reduce() to calculate total salary payout
const payout=employees.reduce((result,emp)=>result + emp.netSalary, 0);
console.log("total salary payout is: ",payout);

//find() employee with salary 30000
const find=employees.find(emp=>emp.salary===30000);
console.log("Employee(s) with salary 30000: ",find);

//findIndex() of employee "Neha"
const indexNeha=employees.findIndex(emp=>emp.name==="Neha");
console.log("Index of Neha is: ",indexNeha);