$(document).ready(function() {

var url = 'https://crossorigin.me/https://api.darksky.net/forecast/';
var key = 'a5909895759c6a1551f92a4e6656f49e5';
var coords = {
	scl: '-33.4488897,-70.6692655',
	ccp: '-36.8270776,-73.0502683'
}


var queryParams = ['?exclude=[minutely,hourly,daily,alerts,flags]', 'lang=es', 'units=auto']

var image = {

	'clear-day': 'https://png.pngtree.com/svg/20170711/11f5029e9c.svg',
	'rain': 'https://cdn3.iconfinder.com/data/icons/picons-weather/57/15_heavy_rain-512.png'
}
$('#select').on('change', function() {
 $.ajax({
		url: url + key + '/' + coords[$(this).val()] + '?' + queryParams[0] + '&' + queryParams[1] + '&' + queryParams[2],
		method: 'GET'
		}).then(function(data) {
		console.log(data);
		$('#resumen').text(parseInt(data.currently.temperature) + 'º ' + data.currently.summary);
		$('#sensacion').text(data.currently.apparentTemperature + 'º');
		$('#probabilidad').text(data.currently.precipProbability + '%');
		$('#humedad').text(data.currently.humidity + '%');
		$('.img-responsive').attr('src', image[data.currently.icon]);
        });
	   });
});
