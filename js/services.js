// Services
nahorApp
		.service(
				'nahorService',
				[
						'$resource',
						'$http',
						'$log',
						'$location',
						function($resource, $http, $log, $location, FeedLoader) {
							
							this.getBlogFeed = function(){
								var GetResource = $resource(
										'https://api.rss2json.com/v1/api.json\?rss_url\=https://medium.com/feed/@nahor',
										{
											get : {
												method : "JSON",
												headers : {
													'Access-Control-Allow-Origin' : '*'
												}
											}
										});

                                 return GetResource.get();
							}
                        } ]);
