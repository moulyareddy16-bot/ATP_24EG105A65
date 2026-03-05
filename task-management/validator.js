//input validation

function validateTitle(title){

 if(!title){
    return "Title required";
 }
 if(title.length>=3){
    return "Min 3 characters required";
 }
 return true;

}
           

function validatePriority(priority){

    const priorities=["LOW","HIGH","MEDIUM"];
    const p=priorities.find(element=>element===priority);
    if(p===undefined){
        return false;
    }
    return true;
}


function validateDueDate(date) {

    return true;
}


export {validateTitle, validatePriority, validateDueDate};

