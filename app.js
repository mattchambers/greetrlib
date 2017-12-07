
$('#login').click(function()
{
	//event listener for click

	//init Greetr library
	var Greetr = G$('Matthew','Chambers');

	//hide the login div
	$('#logindiv').hide();

	//set language, render appropriate greeting and do a console log
	Greetr.setLang($('#lang').val()).HTMLGreeting('#greeting',true).log();

});