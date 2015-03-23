'use strict';
/**
* @ngdoc overview
* @name milfaqApp
* @description
* # milfaqApp
*
* Main module of the application.
*/
angular
  .module('milfaqApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ui.router',
    'ngSanitize',
    'ngTouch',
    'usersFactory',
    'perfisFactory',
    'problemasFactory',
    'respostasFactory',
    'monospaced.elastic',
    'ng-token-auth',
  ])

.config(function ($stateProvider, $urlRouterProvider, $authProvider) {
   $stateProvider
    .state('/', {
      url:'/login',
      templateUrl: 'views/login.html',
      controller: 'MainCtrl'
    })
    .state('index', {
      url:'/index',
      template: '<ui-view="main"/>',
      resolve: {
        auth: function ($auth) {
          return $auth.validateUser();
        }
      }
    })
    .state('usersIndex', {
      url:'/users',
      templateUrl: 'views/users/index.html',
      controller: 'UsersIndexController'
    })
    .state('usersShow', {
      url: '/users/:id/show',
      templateUrl: 'views/users/show.html',
      controller: 'UsersShowController'
    })
    .state('usersNew', {
      url:'/users/new',
      templateUrl: 'views/users/new.html',
      controller: 'UsersNewController'
    })
    .state('usersEdit', {
      url:'/users/:id/edit',
      templateUrl: 'views/users/edit.html',
      controller: 'UsersEditController'
    })
    // Problemas
    .state('problemasIndex', {
      url:'/problemas',
      templateUrl: 'views/problemas/index.html',
      controller: 'ProblemasIndexController'
    })
    .state('problemasShow', {
      url: '/problemas/:id/show',
      templateUrl: 'views/problemas/show.html',
      controller: 'ProblemasShowController'
    })
    .state('problemasNew', {
      url:'/problemas/new',
      templateUrl: 'views/problemas/new.html',
      controller: 'ProblemasNewController'
    })
    .state('problemasEdit', {
      url:'/problemas/:id/edit',
      templateUrl: 'views/problemas/edit.html',
      controller: 'ProblemasEditController'
    })
   $urlRouterProvider.otherwise('/login');


    $authProvider.configure({
      apiUrl: 'http://0.0.0.0:3000/api'
    });
});