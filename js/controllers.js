// Controller
nahorApp.controller('nahorController', ['$rootScope', '$scope', '$log', '$routeParams', function($rootScope, $scope, $log, $routeParams){

	$scope.title = 'Nahor';
	
	$scope.messageSent = false;
	
	$scope.contactUs = function(){
		
		$scope.messageSent = true;
	}
	
}]);