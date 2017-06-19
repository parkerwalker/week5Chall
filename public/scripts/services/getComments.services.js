app.service('getComments', function($http){
  sv = this;

  sv.getMessage = function(){
    console.log('in getComments.getMessage');

    return $http.get('/get/message').then(function(response){
      console.log('back from /message', response.data);
      return response.data;
    })

  };//end get message
});//end service
