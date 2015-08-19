angular.module('starter.services', [])

.factory('Config', function() {

  return {
    slack: function() {
      return "https://slack.com/api/users.list?token=xoxp-4501575029-4501575033-9276716226-e1d85f&pretty=1";
    }
  };
});
