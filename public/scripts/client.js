var app = angular.module('app',[]);

app.controller('MainController', function(getComments, postComments){
  var vm = this;
  vm.messages = [];

  vm.loadComments = function(){
    getComments.getMessage().then(function(data){
      vm.messages = data;
      console.log(vm.messages);

    });
  };

  vm.newMessage = function(){
    var messageToAdd = {
      name: vm.name,
      message: vm.message
    }//end messageToAdd

    postComments.postMessage(messageToAdd);

    getComments.getMessage().then(function(data){
      vm.messages = data;
    })
  };//end newMessage

});//end controller
