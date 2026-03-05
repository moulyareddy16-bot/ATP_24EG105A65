import { validateTitle, validatePriority, validateDueDate } from "./validator.js";       

let tasks=[];

function addTask(title,priority,dueDate){

    if(validateTitle(title) && validatePriority(priority) && validateDueDate(dueDate)){
    
    tasks.push({title,priority,dueDate});
    return "Task Updated";

    } else{
        return "Invalid Task"
    }

}


function getAllTasks(){
    console.log("Tasks: ", tasks);
}


function completeTask(taskTitle) {

    const taskCompleted=tasks.find(t=>t.title===taskTitle);
    if(!taskCompleted){
        return "Task Not Found";
    }
    console.log(taskCompleted, "completed")
}


export {addTask, getAllTasks, completeTask };