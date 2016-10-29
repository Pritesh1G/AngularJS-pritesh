(function() {
  'use strict';

  angular.module('LunchCheck', [])

  .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.dishes = '';
    $scope.message = '';

    $scope.checkDishes = function(dishes) {
      var dishes = dishes.trim();
      if(dishes) {
        var arrayOfDishes = dishesToArray(dishes);
        $scope.message = getMessage(arrayOfDishes.length);
      } else {
        $scope.message = 'Please enter data first';
      }
    }
  }

  function getMessage(numberOfDishes) {
    if(numberOfDishes > 3) {
      return 'Too much!';
    } else {
      return 'Enjoy!';
    }
  }

  function dishesToArray(dishes) {
    return dishes.split(',');
  }
})();
