$(document).ready(function(){
	var total = 0;

	$('#entry').submit(sumTotalAndNewEntry);

	function sumTotalAndNewEntry(event){
		event.preventDefault();
		var entryNew = $('#newEntry').val();
		var entryNewNum = parseFloat(entryNew);
		var entryNewCurrency = currencyFormat(entryNewNum);
		var entryNew = $('#newEntry').val('');

		// total = total + entryNewNum;
		total += entryNewNum;
		totalCurrency = currencyFormat(total);
			'totalCurrency: '+ totalCurrency);


		$('#entries').append('<tr><td>'+ entryNewCurrency + '</td></tr>')

		$('#total').text(totalCurrency);
	}
	
	function currencyFormat(numberToConvert){
		var currency = numberToConvert.toFixed(2);
		var currencyWithDollar = '$' + currency;
		return currencyWithDollar;
	}	
});

