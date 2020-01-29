"use strict";
exports.__esModule = true;
var Todo = /** @class */ (function () {
    function Todo() {
        this.myTaskArray = [];
    }
    Todo.prototype.addTask = function (task) {
        this.myTaskArray.push(task);
        console.log("Item " + task + " has been added to the Array");
        return this.myTaskArray.length;
    };
    Todo.prototype.listAllTasks = function () {
        //for (let i = 0 ; i<myTaskArray.length; i++){
        //}
        console.log("List of items in the array is:");
        this.myTaskArray.forEach(function (item) {
            console.log(item);
        });
    };
    Todo.prototype.deleteTask = function (task) {
        var num = this.myTaskArray.indexOf(task);
        if (num > -1) {
            this.myTaskArray.splice(num, 1);
            console.log("Item removed from array : " + task);
        }
        else {
            console.log("Item " + task + " is not in array");
        }
        return this.myTaskArray.length;
    };
    return Todo;
}());
var todo1 = new Todo();
todo1.addTask("part a");
todo1.listAllTasks();
todo1.deleteTask("part z");
