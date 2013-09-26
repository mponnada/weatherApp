var apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=melbourne,AU&units=metric";
var htmlString="";

$(document).ready(function() {
	$.ajax({url:apiUrl,dataType:'jsonp'}).done(function(result){
		console.log(result);		
		console.log(result.weather[0].description);
		var city = result.name;
		var country = result.sys.country;
		var humidity  = result.main.humidity;
		var temp = result.main.temp;
		htmlString = htmlString + "<div id='location'>"+city +", "+ country+"</div>";
		htmlString = htmlString + "<div class='weatherData'> <b> Humidity: "+ humidity + " </div>";
		htmlString = htmlString + "<div class='weatherData'> <b> Current Temperature: "+temp  + " </div>";
		htmlString = htmlString + "<div class='weatherData'> <b> Max Temperature: "+  result.main.temp_max + " </div>";
		htmlString = htmlString + "<div class='weatherData'> <b> Min Temperature: "+  result.main.temp_min + " </div>";
		
		
		
		$("#container").html(htmlString);
	}).fail(function(){
		console.log("Error occured");
	});
});




