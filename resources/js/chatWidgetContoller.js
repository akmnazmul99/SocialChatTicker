angular.module('chatWidget', ['services.chat'])
        .controller('chatWidgetContoller', function($scope, chatService) {
            $scope.chatBoxes = [];
            $scope.miniBoxes = [];
            $scope.chatBoxStartPos = 375;
            $scope.miniBoxesStartPos = 940;
            $scope.chatBoxWidth = 260;
            $scope.chatBoxGap = 15;
            $scope.friend_list = [];

            $scope.userId = "";
            $scope.message = {};

            $scope.sendMessage = function(event, chatUserDetails) {
                if (event.keyCode === 13) {
                console.log(chatUserDetails);
                    chatUserDetails.msgComBox.push(chatUserDetails.writtenMsg );
                    chatUserDetails.writtenMsg = "";
                };
            };
            $scope.getFriendList = function() {
               
//                chatService.getFriendList().
//                        success(function(data, status, headers, config) {
//                            $scope.friend_list =  data.friend_list;
//                        });
                $scope.friend_list = [
                    {"userId": "u1", "firstName": "Alamgir ", "lastName": "Kabir", "msgComBox": [{"senderInfo": {"userId": "u1", "firstName": "Alamgir ", "lastName": "Kabir"}, "message": "yes! for u1 user", },{"senderInfo": {"userId": "u2", "firstName": "Rashida ", "lastName": "Sulatan"}, "message": "No! for u2 user"}]
                    },
                    {"userId": "u2", "firstName": "Rashida ", "lastName": "Sulatna", "msgComBox": []
                    },
                    {"userId": "u3", "firstName": "Nazmul ", "lastName": "Islam", "msgComBox": [{"senderInfo": {"userId": "u3", "firstName": "Nazmul ", "lastName": "Islam"}, "message": "hi!"},{"senderInfo": {"userId": "u4", "firstName": "Nazmul ", "lastName": "Islam"}, "message": "Hello!"}]
                    },
                    {"userId": "u4", "firstName": "Sabuj ", "lastName": "Gope", "msgComBox": [{"senderInfo": {"userId": "u4", "firstName": "Sabuj ", "lastName": "Gope"}, "message": "hi!"},{"senderInfo": {"userId": "u3", "firstName": "Nazmul ", "lastName": "Islam"}, "message": "How are you!"}]
                    },
                    {"userId": "u5", "firstName": "Salma ", "lastName": "Akter", "msgComBox": [{"senderInfo": {"userId": "u5", "firstName": "Salma ", "lastName": "Akter"}, "message": "hi!"},{"senderInfo": {"userId": "u3", "firstName": "Nazmul ", "lastName": "Islam"}, "message": "Ok!"}]
                    },
                    {"userId": "u6", "firstName": "Tanveer ", "lastName": "Ahmed", "msgComBox": [{"senderInfo": {"userId": "u6", "firstName": "Tanveer ", "lastName": "Ahmed"}, "message": "hi!"},{"senderInfo": {"userId": "u3", "firstName": "Nazmul ", "lastName": "Islam"}, "message": "Hey!"}]
                    },
                    {"userId": "u7", "firstName": "Noor-e ", "lastName": "Alam", "msgComBox": [{"senderInfo": {"userId": "u7", "firstName": "Noor-e ", "lastName": "Alam"}, "message": "hi!"},{"senderInfo": {"userId": "u3", "firstName": "Nazmul ", "lastName": "Islam"}, "message": "Wow!"}]
                    }
                ];
                
                 
            };

            $scope.getChatBoxes = function() {
                $scope.getFriendList();
//
//                for (var i = 0; i < $scope.friend_list.length; i++) {
//                    var friendChatInfo = $scope.friend_list[ i ];
//                    friendChatInfo.rightPos = $scope.chatBoxStartPos + (i * ($scope.chatBoxWidth + $scope.chatBoxGap));
//                    friendChatInfo.writtenMsg = "";
//                    $scope.chatBoxes.push(friendChatInfo);
//                }
//            };

            
             
                     
                for (var i = 0; i < $scope.friend_list.length; i++) {
                    if (i > 2) {
                        var friendChatInfo = $scope.friend_list[ i ];
                         $scope.miniBoxes.push(friendChatInfo);
                    } else {
                        var friendChatInfo = $scope.friend_list[ i ];
                        friendChatInfo.rightPos = $scope.chatBoxStartPos + (i * ($scope.chatBoxWidth + $scope.chatBoxGap));
                        friendChatInfo.writtenMsg = "";
                        $scope.chatBoxes.push(friendChatInfo);
                    }
                    ;
                }
                ;
            };


//            $scope.setMessage = function(userId) {
//                angular.forEach($scope.chatBoxes, function(user, key) {
//                    if (user.userId === userId) {
//                        user.msgComBox.push($scope.message.message);
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
            
            $scope.removeMiniBoxesUser = function(item) {
                var index = $scope.miniBoxes.indexOf(item);
                $scope.miniBoxes.splice(index, 1);
            };
            
            
            $scope.openMiniBoxesUser = function(clickMiniBoxesUser) {
                var miniBoxesIndex = $scope.miniBoxes.indexOf(clickMiniBoxesUser);
                $scope.miniBoxes.pop(miniBoxesIndex);
                
                $scope.chatBoxes.splice(2, 1);
            };
        });
