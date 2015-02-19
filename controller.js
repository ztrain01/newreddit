var app = angular.module('reddit');

app.controller('PostsController', function($scope, firebaseService) {

  firebaseService.getPosts().then(function(posts){
    return $scope.posts;
  })





})