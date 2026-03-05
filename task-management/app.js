//main application

import { addTask, getAllTasks, completeTask } from "./task.js";

//add a task
addTask("eating","HIGH",'2024-12-12');
addTask("writing","HIGH",'2024-10-16');
addTask("sleeping","LOW",'2025-01-01');


//display all tasks
getAllTasks();



//complete a task
completeTask('eating');



//Display all tasks agaian
getAllTasks();
