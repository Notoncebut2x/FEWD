
// create a function to switch the background based on the the input (id="city-type") */
// return the value of what city the user inputs and store it as a variable
// take that variable and check which city it used
// match the city that is inputeed with the appropraite background and change the background pciture

$(document).ready(function(){

	function cityPix(){

		var displayCity = $('#city-type').val();
		console.log(displayCity);

		if (displayCity === 'New York' || 'displayCity' === 'New York City' || 'displayCity' === 'NYC' ){
			$('background').text('url(../solution_code/images/nyc.jpg)');
		} else if (displayCity === 'San Francisco' || 'displayCity' === 'SF' || 'displayCity' === 'Bay Area'){
			$('background').text('url(../solution_code/images/sf.jpg)');
		} else if (displayCity === 'Los Angeles' || 'displayCity' === 'LA' || 'displayCity' === 'LAX'){
			$('background').text('url(../solution_code/images/la.jpg)');
		} else {
			$('background').text('black)');
		}
	}	
	function changeCity(){
		$('#submit-btn').click('cityPix');
	}

//	console.log(displayCity.toString());
});


