$(document).ready(function(){
	
	$('#submit').click(comparNums);

	function comparNums(){

		var num1 = $('#a').val();
		var num2 = $('#b').val();

		if (num1 === num2){
			$('#comparison').text(' = ');
		} else if (num1 > num2){
			$('#comparison').text(' > ');
		} else if (num1 < num2){
			$('#comparison').text(' < ');
		} else{
			$('#comparison').text('');
		}
// isNaN(parseInt().val())

});