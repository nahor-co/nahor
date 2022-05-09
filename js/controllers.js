// Controller
nahorApp.controller('nahorController', ['$rootScope', '$scope', '$log', '$routeParams', 'nahorService', function($rootScope, $scope, $log, $routeParams, nahorService){

	$scope.title = 'Nahor';
	
	$scope.messageSent = false;
	
	$scope.contactUs = function(){
		
		$scope.messageSent = true;
	}

	$scope.posts = {};

	$scope.blogFeed = nahorService.getBlogFeed();
    $scope.blogFeed.$promise.then(function(response){

		for (var postId = 0; postId < $scope.blogFeed.items.length; postId++){
			var post = new Post($scope.blogFeed.items[postId]);

			$scope.posts[postId] = post;
		}	
		
		console.log($scope.posts);
	});


	function Post(data) {
		this.data = data;

		this.getId = function(){
			return this.data.guid
		}

		this.getLink = function(){
			return this.data.link
		}

		this.getThumbnail = function(){
			return this.data.thumbnail
		}

		this.getDescription = function(){
			var rawDescription = this.data.description
			rawDescription = rawDescription.replace("<p>", "")
			return rawDescription.substring(1, rawDescription.indexOf("<"));
		}

		this.getTitle = function(){
			return this.data.title
		}
	}
}]);