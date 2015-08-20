angular.module('starter.controllers', [])

// var config = require('./config');

.controller('TeamCtrl', function($scope, $http, Config) {

  $http.get('https://slack.com/api/users.list?token=xoxp-4501575029-4501575033-9276716226-e1d85f').then(function(users) {

    $scope.members = users.data.members;

  });

})

.controller('MemberCtrl', function($scope, $http, $stateParams) {
  
  $http.get('https://slack.com/api/users.info?token=xoxp-4501575029-4501575033-9276716226-e1d85f&user=' + $stateParams.memberId).then(function(member) {

    $scope.member = member.data;

  });
})


.controller('ChatsCtrl', function($scope, $http) {
  $scope.sendMessage = function(message) {

    $http.get('https://slack.com/api/chat.postMessage?token=xoxp-4501575029-4501575033-9276716226-e1d85f&channel=C07NP7YBG&text=' + message).then(function(member) {

      // TODO show modal
      // TODO clear the fields
      // TODO redirect somewhere :)

    });

  }
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
