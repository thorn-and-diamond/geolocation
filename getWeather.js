
var testmode= true;
var currLong = 0;
var currLat = 0;
var response = {};
var loc = {};
var allResponse = {};

var displayHead = function(){
                        var wday = loc.observation_time_rfc822.split(" ") ;
                        var ltime = loc.observation_time.split(" ");
                        var myOutPut = "<h2>" + loc.display_location.full + 
                        "</h2><h3>" + wday[0] + " " + ltime[5] + " " +
                        ltime[6] + "</h3><h3>" + loc.weather + "</h3>"

                       $('#head').html(myOutPut);

}

var displayToday = function(){
                    var myOutPut = "<img src=" +'"' + loc.icon_url + '"' + "/>" + 
                    " " + loc.temp_f +"<sup>" +"o</sup><sup >F</sup>";
                    
                    $('#today').html(myOutPut);
}

var displayTodayR = function(){
                    myOutPut = "<div class='right'><p>Precipitation: " + response[0].pop + 
                    "%</p><p>Humidity: " + loc.relative_humidity + "</p><p>Wind: " + loc.wind_mph
                    + " mph</p>";

                  $('#todayR').html(myOutPut);
}

var getForeCast = function(num){
      if (num === response.length) return;
      var tmpdiv = "#day" + num ;
      var outStr = "<p>" + response[num].date.weekday_short + "</p><p><img src=" +
                          '"' + response[num].icon_url + '"' +"/></p><p>" + response[num].high.fahrenheit +
                          " " + response[num].low.fahrenheit + "</p>";
                          $(tmpdiv).html(outStr);
                          getForeCast(num+1);
}


function getLocation() {
    if (testmode){
      getLocWeather();
    }else if (navigator.geolocation) {
      
       navigator.geolocation.getCurrentPosition(getLocWeather);
    } else { 
        x.innerHTML = "Geolocation is not supported by this browser.";
    }
}

function getLocWeather(position) {
    currLong = -121.30594980000001;
    currLat = 38.874983;
 
    $.ajax({
              
          url : "https://api.wunderground.com/api/6887efd8390c8e5e/forecast/q/" + 
                   currLat  + "," + currLong + ".json",
          dataType : "jsonp",
          success : function(parsed_json) {
            response = parsed_json['forecast']['simpleforecast']['forecastday'];
            err1 = parsed_json; 
          }
    });   

var doItAllNow = function(){
  $.ajax({
            
          url : "https://api.wunderground.com/api/6887efd8390c8e5e/conditions/q/" + 
                   currLat  + "," + currLong + ".json",
          dataType : "jsonp",
          success : function(parsed_json) {
              loc = parsed_json['current_observation']; 
              err2 = parsed_json;
              
              displayHead();
              displayToday();
              displayTodayR();
              getForeCast(1);
          }
    });
}

      setTimeout(function(){doItAllNow()},2000);
 



