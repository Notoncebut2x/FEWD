$(document).ready(function(){
	var lights = 'on';

	$('#light_switch').click(switchLights);

	function switchLights(){
		if(lights === 'on'){
			$('body').css('background','black');

		lights = 'off';
		}else if (lights === 'off'){
			$('body').css('background','white');

			lights = 'off';
		}
	}
});