(function () {
'use strict';

angular.module('DIApp', [])
.controller('DIController', DIController);

function DIController ($scope, $filter)  {
  $scope.name = "Pritesh";
  $scope.upper = function () {
    var upCase = $filter('uppercase');
    $scope.name = upCase($scope.name);
  };
}

function AnnonateMe(name,job, blah) {
  return "Blah!";
}
console.log(AnnonateMe.toString());
})();
