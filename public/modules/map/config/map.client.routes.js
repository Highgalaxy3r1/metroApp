'use strict';

//Setting up route
angular.module('map').config(['$stateProvider',
	function($stateProvider) {
		// Map state routing
		$stateProvider.
		state('map', {
			url: '/map',
			templateUrl: 'modules/map/views/map.client.view.html'
		});
	}
]).
run(['Menus',
function(Menus) {
// Set top bar menu items
Menus.addMenuItem('topbar', 'Map Search', 'map');
}
]);