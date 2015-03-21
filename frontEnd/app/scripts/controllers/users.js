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
    
    $scope.index = function(){
      $scope.users = usersFactory.index();
      $scope.campoOrdenado = "nome";
    };

    $scope.destroy = function(user) {
        usersFactory.destroy({id: user.id}).$promise.then(
          //sucess
          function( data ){
            console.log( data );
            $scope.index();
          },
          //error
          function( error ){
            console.log( error );
          }
        );
    };

  $scope.index();
}])

.controller('UsersShowController', ['$scope', '$stateParams', 'usersFactory', function($scope, $stateParams, usersFactory) {
    $scope.user = usersFactory.show({id: $stateParams.id});
}])

.controller('UsersNewController', ['$scope', '$stateParams','$state', 'usersFactory', 'perfisFactory', function($scope, $stateParams, $state ,usersFactory, perfisFactory) {
    
    $scope.users = {};

    $scope.save = function() {
        $scope.users.perfil_id = $scope.users.perfil.id;
        usersFactory.create($scope.users).$promise.then(
        //sucess
        function( data ){
          console.log( data );
          $state.go('usersIndex');
        },
        //error
        function( error ){
          console.log( error );
        }
      );
    };

    $scope.load_perfis = function() {
      $scope.perfis = perfisFactory.index();
    };

    $scope.load_perfis();

}])

.controller('UsersEditController', ['$scope', '$stateParams','$state', 'usersFactory', 'perfisFactory', function($scope, $stateParams, $state, usersFactory, perfisFactory) {
    
    $scope.users = {};

    $scope.update = function() {
      $scope.users.perfil_id = $scope.users.perfil.id;
      $scope.users.$update({id: $scope.users.id}).then(
        function( data ) {
          $state.go('usersIndex');
        },
        function( error ){
          console.log( error );
        }
      );
    };

    $scope.load = function() {
        $scope.users = usersFactory.show({id: $stateParams.id}).$promise.then(
        //sucess
        function( data ){
          $scope.users = data;
          angular.forEach($scope.perfis, function(value, key) {
            if(data.perfil.id == value.id) {
              $scope.users.perfil = $scope.perfis[key];
              return;
            }

          });
        },
        function( error ){
          console.log ( error );
        }
      );
    };

    $scope.load_perfis = function() {
      $scope.perfis = perfisFactory.index();
    };

    $scope.load_perfis();
    $scope.load();
}]);
