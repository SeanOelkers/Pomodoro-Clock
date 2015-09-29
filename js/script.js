$(document).ready(function() {

	$('#progressTimer').click(function() {
		if ($('#progressTimer').hasClass('active')) {
			$('#progressTimer').removeClass('active');
			$('#progressTimer').prop('title','Click to (Re)start');
			$('#progressTimer').prop('alt','Click to (Re)start');
		} else {
			$('#progressTimer').addClass('active');
			$('#progressTimer').prop('title','Click to Pause');
			$('#progressTimer').prop('alt','Click to Pause');
		}
	});

});