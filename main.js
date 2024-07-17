import inquirer from "inquirer";
let todos = [];
let condition = true;
while (condition) {
    let addTask = await inquirer.prompt([
        {
            name: "todo",
            type: "input",
            message: "What you want to add in your todo?"
        }, {
            name: "addMore",
            type: "confirm",
            message: "Do you want to add more Todo?",
            default: "false"
        },
    ]);
    todos.push(addTask.todo);
    condition = addTask.addMore;
    console.log(todos);
}
/*
     const{Todo item,addMore} = input;

     todos.push(Todos item);
     if (addMore == "no"){
        console.log("Todolist")
     for (let i = 0;i <todos.length;i++)
     {console.log(todos[i])}
    break;
    }
}*/ 
