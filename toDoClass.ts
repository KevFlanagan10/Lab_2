import{toDoInterface} from './Interface';

class toDoClass implements toDoInterface{

    myTasks: Array<string> = [];

    addTask(task: string): number {

        return this.myTasks.push(task);// keyword PUSH adds elements to array //must use THIS keyword
    }

    listAllTasks():void {
        console.log("Beginning of an array");
        this.myTasks.forEach(function(task) {
                console.log(task);
            })
            console.log("End of the Array");
        }

        deleteTask(test: string): number {
            let index: number = this.myTasks.indexOf(test, 0);
            if (index > -1) {
                console.log("Item " + test + " found and deleted!");
                        this.myTasks.splice(index, 1)
            }
            else {
                console.log("Item " + test + " not found!");
            }
            return this.myTasks.length;
        }
    }
    let testClass = new toDoClass();
    testClass.addTask("Element");
    testClass.addTask("Element 2");
    testClass.addTask("Element 3");

    testClass.listAllTasks();

    testClass.deleteTask("Element 2");

    testClass.listAllTasks();


