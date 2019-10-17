angular.module("MoreDirectivesApp", [])
  .controller("mainCtrl", MainController);

function MainController() {

  this.myList = [{ 'name': 'Name1', 'age': 'Age1' },
  { 'name': 'Name2', 'age': 'Age2' },
  { 'name': 'Name3', 'age': 'Age3' },
  { 'name': 'Name4', 'age': 'Age4' }];

}