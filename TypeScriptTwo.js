var myTask = [];
function addTask(task) {
    return myTask.push(task); // keyword PUSH adds elements to array
}
console.log(addTask("1"));
console.log(addTask("2"));
console.log(addTask("3"));
console.log(addTask("4"));
function listAllTasks() {
    console.log("Beginning of an array");
    myTask.forEach(function (task) {
        console.log(task);
    });
    console.log("End of the Array");
}
listAllTasks();
function deleteTasks(test) {
    var index = myTask.indexOf(test, 0);
    if (index > -1) {
        console.log("Item " + test + " found and deleted!");
        myTask.splice(index, 1);
    }
    else {
        console.log("Item " + test + " not found!");
    }
    return myTask.length;
}
addTask("Element");
addTask("Element 2");
addTask("Element 3");
listAllTasks();
deleteTasks("Element 2");
listAllTasks();
