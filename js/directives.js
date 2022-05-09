// Directives
nahorApp.directive("postsPanel", function(){
    return {
        restrict: 'E',
        templateUrl: './postsPanel.html',
        replace: true,
        scope: {
            posts: "=",
        },
    } 
     
 });
 