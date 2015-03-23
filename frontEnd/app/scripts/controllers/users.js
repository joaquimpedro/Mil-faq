'use strict';
/**
 * @ngdoc function
 * @name milfaqApp.controller:UsersControlles
 * @description
 * # UsersControlles
 * Controller of the milfaqApp
 */
angular.module('milfaqApp')

.controller('UsersIndexController', ['$scope', 'usersFactory', function($scope, usersFactory) {
    $scope.user_to_destroy = {};
    
    $scope.index = function(){
      usersFactory.index().$promise.then(
        function (data) {
          $scope.users = data;
          $scope.campoOrdenado = "nome";
        },
        function (error) {
          $scope.error_message = error.data.errors[0];
        }
      );
    };

    $scope.destroy = function(user) {
        usersFactory.destroy({id: user.id}).$promise.then(
          function( data ){
            console.log( data );
            $scope.index();
          },
          function( error ){
            $scope.error_message = error.data.errors[0];
          }
        );
    };

    $scope.setUserToDestroy = function(id) {
      $scope.user_to_destroy = id;
    };

  $scope.index();
}])

.controller('UsersShowController', ['$scope', '$stateParams', 'usersFactory', function($scope, $stateParams, usersFactory) {
  usersFactory.show({id: $stateParams.id}).$promise.then(
    function (data) {
      $scope.user = data;
    },
    function (error) {
      $scope.error_message = error.data.errors[0]; 
    }
  );
}])

.controller('UsersNewController', ['$scope', '$stateParams', '$state', '$auth', 'usersFactory', 'perfisFactory', function($scope, $stateParams, $state, $auth, usersFactory, perfisFactory) {
    
    $scope.users = {};

    $scope.save = function() {
        usersFactory.create($scope.users).$promise.then(
        function( data ){
          $state.go('usersIndex');
        },
        function( error ){
          $scope.error_message = error.data.errors[0];
        }
      );
    };

    $scope.load_perfis = function() {
      perfisFactory.index().$promise.then(
        function (data) {
          $scope.perfis = data;
        },
        function (error) {
          $scope.error_message = error.data.errors[0];
        }
      );
    };

    $scope.login = function () {
      $auth.submitRegistration($scope.users)
      .then(function(resp) { 
        console.log(resp);
      })
      .catch(function(resp) { 
        console.log(resp);
      });
    };

    $scope.load_perfis();

}])

.controller('UsersEditController', ['$scope', '$stateParams','$state', 'usersFactory', 'perfisFactory', function($scope, $stateParams, $state, usersFactory, perfisFactory) {
    
    $scope.users = {};

    $scope.update = function() {
      $scope.users.$update({id: $scope.users.id}).then(
        function( data ) {
          $state.go('usersIndex');
        },
        function( error ){
          $scope.error_message = error.data.errors[0];
        }
      );
    };

    $scope.load = function() {
        $scope.users = usersFactory.show({id: $stateParams.id}).$promise.then(
        //sucess
        function( data ){
          $scope.users = data;
        },
        function( error ){
          $scope.error_message = error.data.errors[0];
        }
      );
    };

    $scope.load_perfis = function() {
      perfisFactory.index().$promise.then(
        function (data) {
          $scope.perfis = data;
        },
        function (error) {
          $scope.error_message = error.data.errors[0];
        }
      );
    };

    $scope.load_perfis();
    $scope.load();
}]);
