var app = angular.module("Chat", ['chatWidget']);

app.directive("chatBox", function() {
  return {
    restrict: "E",
    replace: true,
    templateUrl: "friend_ticker.html"
  };
});


