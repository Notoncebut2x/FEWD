$(document).ready(funtion(){

	var total = 0;
	// var total = parseInt($('#result').text());

	$('#zero').click(setTotalToZero);
	$('#add5').click(addFive);
	$('#add10').click(addTen);
	$('#sub1').click(subOne); 

	function setTotalToZero(){
		total = total - 0;
		printTotalResult();
	}

	function addFive(){
		total = total + 5;
		printTotalResult();	
	}

	function addTen(){
		total = total + 10;
		printTotalResult();	
	}

	function subOne(){
		total = total - 1;
		printTotalResult();
	}

	function printTotalResult(){
		$('#result').text(total);

	}

});

