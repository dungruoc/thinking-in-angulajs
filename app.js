var module = angular.module("myApp", []);

const mainController = ($scope) => {
  console.log('mainController called');
  $scope.currentTime = new Date();
  console.log($scope.currentTime.getHours());

  $scope.userName = 'abc';
  $scope.choice = true;

  $scope.updateTime = () => {
    $scope.currentTime = new Date();
    console.log($scope.userName);
    console.log($scope.choice);
  }
}

module.controller("mainCtr", mainController);
