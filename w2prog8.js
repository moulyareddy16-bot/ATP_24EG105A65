/* ASSIGNMENT 5: 
-------------
Bank Transaction Analyzer

You are building a bank statement summary. */


const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

//filter() all credit transactions
const creditTrans=transactions.filter(trans=>trans.type==="credit");
console.log("all credit transactions are: ",creditTrans);

//map() to extract only transaction amounts
const transAmnt=transactions.map(trans=>trans.amount);
console.log(transAmnt);

//reduce() to calculate final account balance
const accBalance=transactions.reduce((balance, trans) => {
  if(trans.type === "credit"){
    return balance + trans.amount;
  }else {
    return balance - trans.amount;
  }
}, 0);

//find() the first debit transaction
const firstDebit=transactions.find(trans=>trans.type==="debit");
console.log("first debit transaction is: ",firstDebit);

//findIndex() of transaction with amount 10000
const index=transactions.findIndex(trans=>trans.amount===10000);
console.log("index of amount 10000 is: ",index);