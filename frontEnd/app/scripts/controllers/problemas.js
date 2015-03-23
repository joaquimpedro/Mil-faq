'use strict';
/**
 * @ngdoc function
 * @name milfaqApp.controller:ProblemasControlles
 * @description
 * # ProblemasControlles
 * Controller of the milfaqApp
 */
angular.module('milfaqApp')

.controller('ProblemasIndexController', ['$scope', '$state', 'problemasFactory', function($scope, $state, problemasFactory) {

  $scope.problema_to_destroy = {};
  
  $scope.index = function(){
    problemasFactory.index().$promise.then(
      function (data) {
        $scope.problemas = data;
        $scope.campoOrdenado = 'titulo';
      },
      function (error) {
        $scope.error_message = error.data.errors[0];
      }
    );
  };

  $scope.destroy = function(problema) {
      problemasFactory.destroy({id: problema.id}).$promise.then(
        function( data ){
          $scope.index();
        },
        function( error ){
          $scope.error_message = error.data.errors[0];
        }
      );
  };

  $scope.resolvido = function(data) {
    $scope.problema = data;
    $scope.problema.status_id = 2;
    $scope.verifica_se_possui_resposta($scope.problema.id, function(possui_resposta) {
      if(possui_resposta) {
        $scope.update();
      } else {
        $scope.error_message = 'Nao e possivel marcar como resolvida - E necessaria alguma resposta!';
      }
    });
  };

  $scope.em_aberto = function(data) {
    $scope.problema = data;
    $scope.problema.status_id = 1;
    $scope.update();
  };

  $scope.setProblemaToDestroy = function(id) {
    $scope.problema_to_destroy = id;
  };

  $scope.update = function() {
    $scope.problema.$update({id: $scope.problema.id}).then(
      function( data ) {
        $state.go('problemasIndex');
      },
      function( error ){
        $scope.error_message = error.data;
      }
    );
  };

  $scope.verifica_se_possui_resposta = function(id, callback) {
   return  problemasFactory.show({id: id}).$promise.then(
      function (data) {
        callback(data.respostas.length === 0 ? false : true);
      },
      function (error) {
        $scope.error_message = error.data.errors[0];
      }
    );
  };

  $scope.index();
}])

.controller('ProblemasShowController', ['$scope', '$stateParams', 'problemasFactory', 'respostasFactory', function($scope, $stateParams, problemasFactory, respostasFactory) {

  $scope.problema = {};
  $scope.show = function() {
    problemasFactory.show({id: $stateParams.id}).$promise.then(
      function (data) {
        $scope.problema = data;
      },
      function (error) {
        $scope.error_message = error.data.errors[0];
      }
    );
  };

  $scope.responder = function() {
    $scope.resposta = {
      descricao: $scope.problema.resposta,
      usuario_id: $scope.problema.usuario_id,
      problema_id: $scope.problema.id
    };

    respostasFactory.create($scope.resposta).$promise.then(
      function( data ){
        $scope.show();
      },
      function( error ){
        $scope.error_message = error.data;
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
          $scope.error_message = error.data;
        }
      );
    };

    $scope.load_usuarios = function () {
      usersFactory.index().$promise.then(
        function (data) {
          $scope.usuarios = data;
          $scope.problema.usuario_id = data[0].id;
        },
        function (error) {
          $scope.error_message = error.data.errors[0];
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
          $scope.error_message = error.data;
        }
      );
    };

    $scope.load = function() {
        $scope.problema = problemasFactory.show({id: $stateParams.id}).$promise.then(
        function( data ){
          $scope.problema = data;
        },
        function( error ){
          $scope.error_message = error.data.errors[0];
        }
      );
    };

    $scope.load_usuarios = function () {
      usersFactory.index().$promise.then(
        function (data) {
          $scope.usuarios = data;
        },
        function (error) {
          $scope.error_message = error.data.errors[0];
        }
      );
    };

    $scope.load_usuarios();
    $scope.load();
}]);
