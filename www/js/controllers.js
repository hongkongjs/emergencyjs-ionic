angular.module('emergencyJs.controllers', ['emergencyJs.constants'])

// var config = require('./config');

.controller('TeamCtrl', ['$scope', '$http', 'SLACK', 
  function($scope, $http, SLACK) {
    $http.get(SLACK.API_BASE + 'users.list?token=' + SLACK.GROUP_TOKEN).then(function(users) {
      $scope.members = users.data.members;
    });
  }
])

.controller('MemberCtrl', ['$scope', '$http', '$stateParams', 'SLACK', 
  function($scope, $http, $stateParams, SLACK) {
    $http.get(SLACK.API_BASE + 'users.info?token=' + SLACK.GROUP_TOKEN + '&user=' + $stateParams.memberId).then(function(member) {
      $scope.member = member.data;
    });
  }
])


.controller('ChatsCtrl', ['$scope', '$http', '$q', 'SLACK', 'CHANNEL_NAMES', 
  function($scope, $http, $q, SLACK, CHANNEL_NAMES) {
    $scope.sendMessage = function(firstname, lastname, email, message) {
      //See if the channel exists
      var newChannel = getChannelName();

      createChannel(newChannel).then(function(channelId) {
        var chatMessage = getChatMessage(firstname, lastname, email, message);

        //Valid channel created
        $http.get(SLACK.API_BASE + 'chat.postMessage?token=' + SLACK.GROUP_TOKEN + '&channel='+channelId+'&text=' + chatMessage).then(function(member) {

          // TODO show modal
          // TODO clear the fields
          // TODO redirect somewhere :)

        });

      }, function(error) {
        //Invalid channel name, retry
        $scope.sendMessage(message);  
      });
    }

    getChatMessage = function(firstname, lastname, email, message) {
      var result = message;
      if(email)
        result = '<'+email+'> ' + result;

      if(lastname)
        result = lastname + ' ' + result;
      if(firstname)
        result = firstname + ' ' + result;

      return result;
    }

    getChannelName = function() {
      var channelColour = CHANNEL_NAMES.PREFIXES[Math.floor(Math.random() * CHANNEL_NAMES.PREFIXES.length)];
      var channelRoot = CHANNEL_NAMES.ROOTS[Math.floor(Math.random() * CHANNEL_NAMES.ROOTS.length)];
      return 'ejs-'+channelColour+'-'+channelRoot;
    }

    createChannel = function(channelName) {
      
      var deferred = $q.defer();

      $http.get(SLACK.API_BASE + 'channels.create?token=' + SLACK.GROUP_TOKEN + '&name=' + channelName).then(function(results) {
        if(results.data.error && results.data.error == "name_taken") {
          deferred.reject('name_taken');
        } else {
          deferred.resolve(results.data.channel.id);
        }
      });

      return deferred.promise;
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
