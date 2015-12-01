angular.module('services.chat', []).
        factory('chatService', function ($http, $location) {
            var chatService = {};
             var $app_name = "/muslimand";
           
             chatService.getFriendList = function () {
                return $http({
                    method: 'post',
                    crossDomain:true,
                    url: 'http://localhost/muslimand/friend/get_chat_friend_list/3',
                    data: {
                    }
                });
            };

            return chatService;
        });