'use strict';

//Setting up route
angular.module('categories').config(['$stateProvider',
	function($stateProvider) {
		// Categories state routing
		$stateProvider.
		state('categories', {
			url: '/categories',
			templateUrl: 'modules/categories/views/categories.client.view.html'
		});
	}
]).
run(['Menus',
function(Menus) {
// Set top bar menu items
Menus.addMenuItem('topbar', 'Categories', 'categories');
}
]);