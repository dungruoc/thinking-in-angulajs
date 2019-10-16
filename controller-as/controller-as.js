var module = angular.module("ControllerAsApp", []);

function Controller1() {
  this.testProp = 'From Controller1';
}

function Controller2() {
  this.testProp = 'From Controller2';
}


module.controller("ctrl1", Controller1);
module.controller("ctrl2", Controller2);
