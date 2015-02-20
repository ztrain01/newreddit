var app = angular.module('reddit');

app.controller('PostsController', function($scope, firebaseService) {

  firebaseService.getPosts().then(function(posts){
    return $scope.posts;
  })


  
  
  $scope.vote = function(id, direction) {
    mainService.vote(id, direction, $scope.posts[id].karma).then(function(data))
      getData();
}


})