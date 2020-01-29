import {TodoInterface} from './interface';

class Todo implements TodoInterface{

    myTaskArray: Array<string> = [];

    addTask(task: string): number {
        this.myTaskArray.push(task);
        console.log("Item " + task + " has been added to the Array");
        return this.myTaskArray.length;
    }

    listAllTasks(): void {
        //for (let i = 0 ; i<myTaskArray.length; i++){
        //}
        console.log("List of items in the array is:");
        this.myTaskArray.forEach(function (item) {
            console.log(item);
        });
    }

    deleteTask(task: string): number {
        let num = this.myTaskArray.indexOf(task);
        if (num > -1) {
            this.myTaskArray.splice(num, 1);
            console.log("Item removed from array : " + task);
        } else {
            console.log("Item " + task + " is not in array")
        }
        return this.myTaskArray.length;
    
    }


}

let todo1 = new Todo();
todo1.addTask("part a");
todo1.listAllTasks();
todo1.deleteTask("part z");

