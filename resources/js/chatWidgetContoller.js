angular.module('chatWidget', ['services.chat'])
        .controller('chatWidgetContoller', function($scope, chatService) {
            $scope.chatBoxes = [];
            $scope.chatBoxStartPos = 375;
            $scope.chatBoxWidth = 260;
            $scope.chatBoxGap = 15;
            $scope.friend_list = [];
            

            $scope.userId = "";
            $scope.message = {};

           $scope.sendMessage = function(event, chatUserDetails){
                if (event.keyCode === 13) {
                    chatUserDetails.msgComBox.push(chatUserDetails.writtenMsg);
                    chatUserDetails.writtenMsg = "";
                }
           }
            $scope.getFriendList = function() {
//                chatService.getFriendList().
//                        success(function(data, status, headers, config) {
//                            $scope.friend_list =  data.friend_list;
//                        });
                $scope.friend_list = [
                    {"userId": "qGPwmNkb9w2DS4O", "firstName": "Alamgir ", "lastName": "Kabir", "msgComBox": ["hi"]
                    },
                    {"userId": "qGPwmNkb9w2DS41", "firstName": "Rashida ", "lastName": "Sultana", "msgComBox": ["hi", "hello"]
                    },
                    {"userId": "qGPwmNkb9w2DS42", "firstName": "Nazmul ", "lastName": "Islam", "msgComBox": ["yes!"]
                    }];
            };

            $scope.getChatBoxes = function() {
                $scope.getFriendList();

                for (var i = 0; i < $scope.friend_list.length; i++) {
                    var friendChatInfo = $scope.friend_list[ i ];
                    friendChatInfo.rightPos = $scope.chatBoxStartPos + (i * ($scope.chatBoxWidth + $scope.chatBoxGap));
                    friendChatInfo.writtenMsg = "";
                    $scope.chatBoxes.push(friendChatInfo);
                }
            };

//            $scope.setMessage = function(userId) {
//                angular.forEach($scope.chatBoxes, function(user, key) {
//                    if (user.userId === userId) {
//                        user.msgComBox.push($scope.message.message);
//                        
//                    }
//                }, $scope.chatBoxes);
//            };

            $scope.removeUser = function(element) {
                for (var i = 0; i < $scope.chatBoxes.length; i++) {
                    if (element.userId === $scope.chatBoxes[ i ].userId) {
                        $scope.chatBoxes.splice(i, 1);
                    }
                    if ($scope.chatBoxes[i] !== undefined) {
                        $scope.chatBoxes[i].rightPos = $scope.chatBoxStartPos + (i * ($scope.chatBoxWidth + $scope.chatBoxGap));
                    }
                }
            };
        });
