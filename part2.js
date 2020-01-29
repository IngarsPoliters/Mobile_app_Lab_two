var myTaskArray = [];
function addTask(task) {
    myTaskArray.push(task);
    console.log("Item " + task + " has been added to the Array");
    return myTaskArray.length;
}
function listAllTasks() {
    //for (let i = 0 ; i<myTaskArray.length; i++){
    //}
    console.log("List of items in the array is:");
    myTaskArray.forEach(function (item) {
        console.log(item);
    });
}
function deleteTask(task) {
    var num = myTaskArray.indexOf(task);
    if (num > -1) {
        myTaskArray.splice(num, 1);
        console.log("Item removed from array : " + task);
    }
    else {
        console.log("Item " + task + " is not in array");
    }
    return myTaskArray.length;
}
addTask("Complete part A");
addTask("poo");
var itemsInArray = addTask("Complete Part B");
console.log("Number of Items in Array is " + itemsInArray);
listAllTasks();
itemsInArray = deleteTask("poo");
console.log("Number of Items in Array is " + itemsInArray);
