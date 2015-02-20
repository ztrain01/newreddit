var app = angular.module('reddit');

app.service('FirebaseService', function($http, $q) {
  this.getData = function() {
    return $http({
      method: 'GET',
      url: 'https://devmtn.firebaseio.com/posts.json',
    }).then(function(data) {
      return data.data; 
    });
  }

    this.addPost = function(post) {
      console.log(post)
      return $http({
        method: 'PUT',
        url: 'https://devmtn.firebaseio.com/posts.json',
        data: post
      }).then(function(data) {
        console.log('post res', data)
      });
    }
  
    this.vote = function(postId, direction, karma) {
      if(direction === 'up') {
       karma++;
      } else if(direction === 'down') {
        karma--;
      } else {
        console.log('them karmas broke')
      }
    
    return $http({
      method: 'PATCH',
      url: 'https://devmtn.firebaseio.com/posts/' + postId + '/comments.json',
      data: {karma: karma}
    });
    }
    
  this.addComment = function(postID, commentObj) {
    return $http({
      method: 'POST',
      url: 'https://devmtn.firebaseio.com/posts/' + postId + '/comments.json',
      data: {comment: commentObj}
    });
  }





});