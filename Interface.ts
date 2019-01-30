export interface toDoInterface{
    myTasks:Array<string>;
    addTask(task:string):number;

    listAllTasks():void;

    deleteTask(task:string):number;
}