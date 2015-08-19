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

  // $scope.member = {name: "Kevin"};

})


.controller('ChatsCtrl', function($scope) {
  
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
