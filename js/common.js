$(document).ready(function() {

	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			$(this).find("input").val("");
			alert("Спасибо");
			$("#form").trigger("reset");
		});
		return false;
	});
	
});

/* https://literatura-21.ru/ Modern Literature of 21 century */