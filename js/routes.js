// Config
nahorApp.config(function($routeProvider){
   
    $routeProvider
    
    .when('/', {
        templateUrl: 'home.html',
        controller: 'nahorController'
    })
    
});