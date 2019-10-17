angular.module("my-hello", [])
  .controller("MyHelloCtrl", MainController);

function MainController() {
  this.message = 'Hello from my-hello';
}