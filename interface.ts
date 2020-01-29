export interface TodoInterface {

    addTask(task:string):number;
    listAllTasks(): void;
    deleteTask(task: string): number;
    myTaskArray: Array<string>;


}