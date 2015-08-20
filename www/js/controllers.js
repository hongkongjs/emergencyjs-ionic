angular.module('emergencyJs.controllers', ['emergencyJs.constants'])

// var config = require('./config');

.controller('TeamCtrl', ['$scope', '$http', 'slack', 
  function($scope, $http, slack) {
    $http.get(slack.apiBase + 'users.list?token=' + slack.groupToken).then(function(users) {
      $scope.members = users.data.members;
    });
  }
])

.controller('MemberCtrl', ['$scope', '$http', '$stateParams', 'slack', 
  function($scope, $http, $stateParams, slack) {
    $http.get(slack.apiBase + 'users.info?token=' + slack.groupToken + '&user=' + $stateParams.memberId).then(function(member) {
      $scope.member = member.data;
    });
  }
])


.controller('ChatsCtrl', ['$scope', '$http', 'slack', 
  function($scope, $http, slack) {
    $scope.sendMessage = function(message) {
      $http.get(slack.apiBase + 'chat.postMessage?token=' + slack.groupToken + '&channel=C07NP7YBG&text=' + message).then(function(member) {

        // TODO show modal
        // TODO clear the fields
        // TODO redirect somewhere :)

      });
    }
  }
])

.controller('ChatDetailCtrl', 
  function($scope, $stateParams, Chats) {
    $scope.chat = Chats.get($stateParams.chatId);
  }
)

.controller('AccountCtrl', 
  function($scope) {
    $scope.settings = {
      enableFriends: true
    };
  }
);
