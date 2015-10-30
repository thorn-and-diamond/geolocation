
var getMain = function(clong,clat)
{

    var response = {};
    var loc = {};


    var displayHead = function () {
        var wday = loc.observation_time_rfc822.split(" ");
        var ltime = loc.observation_time.split(" ");
        var myOutPut = "<h2>" + loc.display_location.full +
            "</h2><h3>" + wday[0] + " " + ltime[5] + " " +
            ltime[6] + "</h3><h3>" + loc.weather + "</h3>";

        $('#head').html(myOutPut);

    };

    var displayToday = function () {
        var myOutPut = "<img src=" + '"' + loc.icon_url + '"' + "/>" +
            "<div id='temp'>" + loc.temp_f + "</div><sup class='degree'>" +
            "o</sup>";

        $('#today').html(myOutPut);
    };

    var displayTodayR = function () {
        myOutPut = "<div><p>Precipitation: <b>" + response[0].pop +
            "%</b>   Humidity: <b>" + loc.relative_humidity + "  </b><em>Wind:<b> " + loc.wind_mph
            + " mph</b></em></p>";

        $('#todayR').html(myOutPut);
    };

    var getForeCast = function (num) {
        if (num === response.length) return;
        var tmpdiv = "#day" + num;
        var outStr = "<div class='threeday'><p>" + response[num].date.weekday_short + "</p><p><img src=" +
            '"' + response[num].icon_url + '"' + "/></p><p>H:" + response[num].high.fahrenheit +
            " L:" + response[num].low.fahrenheit + "</p></div>";
        $(tmpdiv).html(outStr);
        getForeCast(num + 1);
    };


    function getLocWeather() {

        $.ajax({

            url: "https://api.wunderground.com/api/6887efd8390c8e5e/forecast/q/" +
            clat + "," + clong + ".json",
            dataType: "jsonp",
            success: function (parsed_json) {
                response = parsed_json['forecast']['simpleforecast']['forecastday'];
                err1 = parsed_json;
            }
        });

        var doItAllNow = function () {
            $.ajax({

                url: "https://api.wunderground.com/api/6887efd8390c8e5e/conditions/q/" +
                clat + "," + clong + ".json",
                dataType: "jsonp",
                success: function (parsed_json) {
                    loc = parsed_json['current_observation'];
                    err2 = parsed_json;

                    displayHead();
                    displayToday();
                    displayTodayR();
                    getForeCast(1);
                }
            });
        }

        setTimeout(function () {
            doItAllNow()
        }, 2000);


    }

    getLocWeather();
}


