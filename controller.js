var app = angular.module('reddit');

app.controller('PostsController', function($scope, FirebaseService) {
  $scope.test = 'Welcome to Reddit!'
  
  $scope.addPost = function() {
    $scope.newPost.id = guid();
    $scope.newPost.timestamp = Date.now();
    $scope.newPost.karma = 0;
    $scope.newPost.comments = [];
    FirebaseService.addPost($scope.newPost).then(function(data) {
      getData();
    });
    $scope.reset();
  }
  
  $scope.reset = function() {
    $scope.newPost = {};
  }
  
  var getData = function() {
    FirebaseService.getData().then(function(data) {
      $scope.posts = data;
    });
  }
  
  getData();
  
var guid = function() {
  var s4 = function() {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1)
  }
  return s4() + s4() + '-' + s4() + '-' +
    s4() + '-' +s4() + s4() + s4();

}
  
//  firebaseService.getPosts().then(function(posts){
//    return $scope.posts;
//  })


  
  
  $scope.vote = function(id, direction) {
    FirebaseService.vote(id, direction, $scope.posts[id].karma).then(function(data){
      getData();
    });
      
}

  $scope.submitComment = function(id, comment) {
    var commentObj = {};
    commentObj.text = comment;
    commentObj.timestamp = Date.now();
    FirebaseService.addComment(id, commentObj).then(function(data) {
      getData();
    });
  }

});