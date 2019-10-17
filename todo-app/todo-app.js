angular.module('todo-app', [])
.controller('todo-controller', TodoController)

function TodoController() {
  this.todoList = [];
  this.editting = false;

  this.addNew = function() {
    if (this.newTodo) {
      this.todoList.push({element: this.newTodo});
      this.newTodo = null;
    }
  }

  this.editClicked = function() {
    this.editting = !this.editting;
    console.log('editClicked', this.editting);
  }

  this.deleteItem = function(index) {
    console.log('deleting index ', index);
    this.todoList.splice(index, 1);
  }
}