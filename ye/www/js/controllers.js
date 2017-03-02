angular.module('starter.controllers', [])

.controller('FeedCtrl', function($scope) {

  console.log("inside Feed Ctrl");
  $scope.items = [
    { id: 1, album: "Sam's post has been shared 20 times.", image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Circle-icons-profle.svg/768px-Circle-icons-profle.svg.png'},
    { id: 2, album: 'Adiriana created a new post on facebook using #youthempowerment.', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Circle-icons-profle.svg/768px-Circle-icons-profle.svg.png'},
    { id: 3, album: "Jay's post has 40 likes.", image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Circle-icons-profle.svg/768px-Circle-icons-profle.svg.png'},
    { id: 4, album: "Jenny tweeted about #youthempowerment.", image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Circle-icons-profle.svg/768px-Circle-icons-profle.svg.png'},
  ];


})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})
.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})
  .controller('ProfileCtrl', function($scope) {
    console.log("inside Profile Ctrl");
  });

