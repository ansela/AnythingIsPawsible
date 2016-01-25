angular
	.module('scotchApp')
	.controller('mainController', function($scope) {
		$scope.message = 'hello world!';
		$scope.lorem = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse convallis elit nulla. Curabitur quis pharetra arcu. Aliquam tincidunt ligula massa, eu dapibus velit sollicitudin eget. Nam interdum, sem vel iaculis lobortis, lectus nulla vehicula arcu, ac sagittis magna diam sit amet nibh. Sed tempor turpis metus, eu consequat urna ultricies quis.';
        $scope.sittingMsg = 'Enjoy being out of town knowing that your pet is in the loving hands of Melissa! Choices include pet sitting at your home or in my own!';
        $scope.trainingMsg = 'Group classes and private lessons are available for you! Teach your puppy or dog some tricks or work on some problem behaviors your dog may have.';
        $scope.daycareMsg = 'Have your dog come over to my house for some playtime with a small group of dogs or have your dogs walked around your neighborhood!';
});