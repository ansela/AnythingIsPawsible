(function ($) {
	$("#contactForm").submit(function(e) {
		//e.preventDefault();
		alert("button clicked");
		//submitForm();
	});

	function submitForm() {
		var name = $("#name").val();
		var email = $("#email").val();
		var phone = $("#phone").val();
		var message = $("#message").val();

		$.ajax({
			type: "POST",
			url: "php/form-process.php",
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
})(jQuery);