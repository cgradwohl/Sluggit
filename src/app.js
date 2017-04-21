var app = angular.module('flapperNews', []);

app.controller('MainCtrl', [
'$scope',
function($scope){

$scope.posts = [
];

$scope.addPost = function(){
  if(!$scope.title || $scope.title === '') { return; }
  if(!$scope.description || $scope.description === '') { return; }
  $scope.posts.push({
	title: $scope.title, 
	description: $scope.description, 
	upvotes: 0
  });
  $scope.title = '';
  $scope.description = '';
};

$scope.incrementUpvotes = function(post) {
  post.upvotes += 1;
};

}]);

