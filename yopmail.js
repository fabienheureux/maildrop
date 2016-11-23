(function ($, window, document, undefined) {
	function generateEmails(range,separator) { 
		arr = [];
		while (range !== 0) {
			var email = Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 5);
			arr.push(email + '@yopmail.com' + separator);
			range--;
		}
		$('pre').html(arr);
	}
	$('input').on('change keyup', function(e) {
		console.log($(this).val());
		generateEmails($(this).val(), ',');
	});
}(Zepto));
