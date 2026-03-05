// I will send 10000 rupees tommoroow 
console.log("I will send 10000 rupees after 10 seconds");

let futureCondition=true;

const promiseObj=new Promise((fulfilled,rejected)=>{
    setTimeout(()=>{
        if(futureCondition===true){
            fulfilled("Sent 10000 rupees");
        }else{
            rejected("Not sent");
        }
    },10000);

});

promiseObj
.then((message)=>console.log(message))//fulfilled then it will automatically invoke then method
.catch((errmessage)=>{console.log(errmessage)});//rejected