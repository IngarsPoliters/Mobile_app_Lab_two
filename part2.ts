let myTaskArray: Array<string> = [];

function addTask(task: string): number {
    myTaskArray.push(task);
    console.log("Item " + task + " has been added to the Array");
    return myTaskArray.length;
}


function listAllTasks(): void {
    //for (let i = 0 ; i<myTaskArray.length; i++){
    //}
    console.log("List of items in the array is:");
    myTaskArray.forEach(function (item) {
        console.log(item);
    });
}

function deleteTask(task: string): number {
    let num = myTaskArray.indexOf(task);
    if (num > -1) {
        myTaskArray.splice(num, 1);
        console.log("Item removed from array : " + task);
    } else {
        console.log("Item " + task + " is not in array")
    }
    return myTaskArray.length;

}

addTask("Complete part A");
addTask("poo");

let itemsInArray: number = addTask("Complete Part B");
console.log("Number of Items in Array is " + itemsInArray);

listAllTasks();
itemsInArray = deleteTask("poo");
console.log("Number of Items in Array is " + itemsInArray);

