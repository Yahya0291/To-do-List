import inquirer from "inquirer";
let addTodo = [];
let condition = true;
while (condition) {
    let askTask = await inquirer.prompt([
        {
            name: "addedtask",
            message: "What you want to add in your Todos?",
            type: "input"
        },
        {
            name: "againtask",
            message: "Do you want to add more task?",
            type: "confirm",
            default: "false"
        }
    ]);
    addTodo.push(askTask.addedtask);
    //console.log(addTodo)
    condition = askTask.againtask;
    if (askTask != "againtask") {
        console.log("your current tasks: " + addTodo);
    }
}
