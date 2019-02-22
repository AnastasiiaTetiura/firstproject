// Make it rain!

$('button').on('click', function() {
	console.log("not passed!")
	$('a').hide();
	$('button').hide();
	$('h1').hide();
	$('h2').hide();
	$('.modal').show();
	})

$('.close').on('click', function() {
	console.log("closing the modal")
	$('.modal').hide();
})












