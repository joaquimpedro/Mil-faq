'use strict';
/**
 * @ngdoc function
 * @name milfaqApp.controller:ProblemasControlles
 * @description
 * # ProblemasControlles
 * Controller of the milfaqApp
 */
angular.module('milfaqApp')

.controller('ProblemasIndexController', ['$scope', 'problemasFactory', function($scope, problemasFactory) {
    
    $scope.index = function(){
      problemasFactory.index().$promise.then(
        function (data) {
          $scope.problemas = data;
          $scope.campoOrdenado = "titulo";
        },
        function (error) {
          console.log(error);
        }
      );
    };

    $scope.destroy = function(problema) {
        problemasFactory.destroy({id: problema.id}).$promise.then(
          function( data ){
            $scope.index();
          },
          function( error ){
            console.log( error );
          }
        );
    };

    $scope.resolvido = function(data) {
      $scope.problema = data;
      $scope.problema.status_id = 2;
      $scope.update();
    };

    $scope.em_aberto = function(data) {
      $scope.problema = data;
      $scope.problema.status_id = 1
      $scope.update();
    };

  $scope.update = function() {
    $scope.problema.$update({id: $scope.problema.id}).then(
      function( data ) {
        $state.go('problemasIndex');
      },
      function( error ){
        console.log( error );
      }
    );
  };

  $scope.index();
}])

.controller('ProblemasShowController', ['$scope', '$stateParams', 'problemasFactory', function($scope, $stateParams, problemasFactory) {

  $scope.problema = {};
  $scope.show = function() {
    problemasFactory.show({id: $stateParams.id}).$promise.then(
      function (data) {
        $scope.problema = data;
      },
      function (error) {
        console.log(error); 
      }
    );
  };

  $scope.responder = function() {
    $scope.problema.$update({id: $scope.problema.id}).then(
      function( data ) {
        $state.go('problemasIndex');
      },
      function( error ){
        console.log( error );
      }
    );
  };

  $scope.show();
}])

.controller('ProblemasNewController', ['$scope', '$stateParams','$state', 'problemasFactory', 'usersFactory', function($scope, $stateParams, $state ,problemasFactory, usersFactory) {
    
    $scope.problema = {};

    $scope.save = function() {
        $scope.problema.status_id = 1;
        problemasFactory.create($scope.problema).$promise.then(
        function( data ){
          $state.go('problemasIndex');
        },
        function( error ){
          console.log( error );
        }
      );
    };

    $scope.load_usuarios = function () {
      usersFactory.index().$promise.then(
        function (data) {
          $scope.usuarios = data
        },
        function (error) {
          console.log(error);
        }
      );
    };

    $scope.load_usuarios();
}])

.controller('ProblemasEditController', ['$scope', '$stateParams','$state', 'problemasFactory', 'usersFactory', function($scope, $stateParams, $state, problemasFactory, usersFactory) {
    
    $scope.problema = {};

    $scope.update = function() {
      $scope.problema.$update({id: $scope.problema.id}).then(
        function( data ) {
          $state.go('problemasIndex');
        },
        function( error ){
          console.log( error );
        }
      );
    };

    $scope.load = function() {
        $scope.problema = problemasFactory.show({id: $stateParams.id}).$promise.then(
        function( data ){
          $scope.problema = data;
        },
        function( error ){
          console.log ( error );
        }
      );
    };

    $scope.load_usuarios = function () {
      usersFactory.index().$promise.then(
        function (data) {
          $scope.usuarios = data
        },
        function (error) {
          console.log(error);
        }
      );
    };

    $scope.load_usuarios();
    $scope.load();
}]);
