var module = angular.module("NestedControllersApp", []);

const Controller1 = ($scope) => {
  $scope.testProp = 'From Controller1';
}

const Controller2 = ($scope) => {
  $scope.testProp = 'From Controller2';
}


module.controller("ctrl1", Controller1);
module.controller("ctrl2", Controller2);
