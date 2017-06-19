app.service('postComments', function($http){
  sv = this;

  sv.postMessage = function(messageToAdd){
    console.log('in postComments.getMessage');

    $http({
      method: 'POST',
      url: '/get/post',
      data: messageToAdd
    })

  }
});//end service
