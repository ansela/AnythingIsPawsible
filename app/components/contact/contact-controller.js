angular.module('scotchApp').controller('contactController', function($scope) {
	$scope.message = 'Contact Page';

	$scope.submit = function() {
		submitForm();
	};

	function submitForm() {
		var name = $scope.name;
		var email = $scope.email;
		var phone = $scope.phone;
		var message = $scope.message;

		$.ajax({
			type: "POST",
			url: "http://AnythingIsPawsible-jax.com/php/form-process.php",
			data: "name=" + name + "&email=" + email + "&phone=" + phone + "&message=" + message,
			success: function(text) {
				if(text == "success") {
					formSuccess();
					alert("Success!");
				} else {
					alert("fuck");
				}
			}
		});
	}
	function formSuccess() {
		$("#msgSubmit").removeClass("hidden");
	}

});