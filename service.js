var app = angular.module('reddit');

app.service('FirebaseService', function($http, $q){

  this.getPosts = function(){
    return $http.get('https://devmtn.firebaseio.com/posts.json').then(function(result){
      return result.data; 
    })
  }

    thi.addPost = function(post) {
      console.log(post)
      return $http({
        method: 'PUT',
        url: 'https://devmtn.firebaseio.com/posts/',
        data: post
      }).then(function(data) {
      
      }
  
  
    this.vote = function(postId, direction, karma){
      if(direction === 'up') {
       karma++;
      } else if(direction === 'down'){
        karma--;
      } else {
        console.log('them karmas broke')
      }
    }
    
    return $http({
      method: 'PATCH',
      url: 'https://devmtn.firebaseio.com/posts/' + postId + '/comments.',
      data: {karma: karma}
    })
    
  this.addComment = function(postID, commentObj) {
    return $http({
      method: 'POST',
      url: 'https://devmtn.firebaseio.com/posts/' + postId + '/comments.',
      data: {coment: commentObj}
    })
  }





})