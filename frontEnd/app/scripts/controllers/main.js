'use strict';
/**
 * @ngdoc function
 * @name milfaqApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the milfaqApp
 */
angular.module('milfaqApp')
  .controller('MainCtrl', ['$scope', '$auth', '$state', function ($scope, $auth, $state) {
  	$scope.login = function () {
  		$auth.submitLogin($scope.usuario)
        .then(function(resp) { 
        	console.log(resp);
        	$state.go('index');
        })
        .catch(function(resp) { 
        	$scope.error_message = resp.errors[0];
        });
  	};
  }]);
