'use strict';

angular.module('respostasFactory',[])
.factory('respostasFactory', ['$resource',function ($resource) {
	return $resource('http://0.0.0.0:3000/respostas/:id/.json', { id: '@_id' },
	{
		'create':  { method: 'POST' },
		'index':   { method: 'GET', isArray: true },
		'show':    { method: 'GET', isArray: false },
		'update':  { method: 'PUT' },
		'destroy': { method: 'DELETE' }
	}
);
}]);


