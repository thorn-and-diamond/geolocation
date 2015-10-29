    var x = document.getElementById("demo");

    function getLocation() {
        if (navigator.geolocation) {
            /* navigator.geolocation.getCurrentPosition(showPosition);*/
            navigator.geolocation.getCurrentPosition(getWeather);
        } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
        }
    }

    function getWeather(position) {

        x.innerHTML = "Latitude: " + position.coords.latitude +
            "<br>Longitude: " + position.coords.longitude;
        jQuery(document).ready(function($) {
            $.ajax({
                url: "https://api.wunderground.com/api/6887efd8390c8e5e/geolookup/conditions/q/" +
                    position.coords.latitude + "," + position.coords.longitude + ".json",
                dataType: "jsonp",
                success: function(parsed_json) {
                    var city = parsed_json['location']['city'];
                    var st = parsed_json['location']['state'];
                    var temp_f = parsed_json['current_observation']['temp_f'];
                    var weather = parsed_json['current_observation']['weather'];

                    alert("City: " + city + " State: " + st + " Temp: " + temp_f + " Weather: " + weather);
                    $('#todaysWeather').append("City: " + city + " State: " + st + " Temp: " + temp_f + " Weather: " + weather);
                    $('#whatToWear').append(weatherAccessories(weather));
                }
            });
        });
    }
    //function that loads additional acsesories depending on weather (rain, sunny etc.)
    var weatherAccessories = function(weatherStr) {
        var weatherArr = {
            'Light Drizzle': 'Umbrella, Rainboots, Rain Jacket',
            //duplicate?
            'Light Drizzle': 'Umbrella, Rainboots, Rain Jacket',
            'Light Rain': 'Umbrella, Rainboots, Rain Jacket',
            'Heavy Rain': 'Umbrella, Rainboots, Rain Jacket',
            'Light Snow': 'Gloves, Warm Hat, Winter Jacket, Boots',
            'Heavy Snow': 'Gloves, Warm Hat, Winter Jacket, Boots',
            'Light Snow Grains': 'Gloves, Warm Hat, Winter Jacket, Boots',
            //duplicate? snow grains = flakes?
            'Light Snow Grains': 'Gloves, Warm Hat, Winter Jacket, Boots',
            'Heavy Snow Grains': 'Gloves, Warm Hat, Winter Jacket, Boots',
            'Light Ice Crystals': 'Gloves, Warm Hat, Winter Jacket, Boots',
            'Heavy Ice Crystals': 'Gloves, Warm Hat, Winter Jacket, Boots',
            // hail?
            'Light Ice Pellets': 'Gloves, Warm Hat, Winter Jacket, Boots',
            'Heavy Ice Pellets': 'Gloves, Warm Hat, Winter Jacket, Boots',
            'Light Hail': 'Gloves, Warm Hat, Winter Jacket, Boots',
            'Heavy Hail': 'Gloves, Warm Hat, Winter Jacket, Boots',
            'Light Mist': 'Light Jacket',
            'Heavy Mist': 'Light Jacket',
            'Light Fog': 'Light Jacket',
            'Heavy Fog': 'Light Jacket',
            'Light Fog Patches': 'Light Jacket',
            'Heavy Fog Patches': 'Light Jacket',
            'Light Smoke': 'Avoid going outside',
            'Heavy Smoke': 'Avoid going outside',
            'Light Volcanic Ash': 'Avoid going outside',
            'Heavy Volcanic Ash': 'Avoid going outside',
            'Light Widespread Dust': 'Light Jacket, Eye Protection, Avoid going outside',
            'Heavy Widespread Dust': 'Light Jacket, Eye Protection, Avoid going outside',
            'Light Sand': 'Dust Mask',
            'Heavy Sand': 'Dust Mask',
            'Light Sandstorm': 'Dust Mask',
            'Heavy Sandstorm': 'Dust Mask',
            'Heavy Blowing Snow': 'Gloves, Warm Hat, Winter Jacket, Boots, Face Mask',
            'Light Blowing Snow': 'Gloves, Warm Hat, Winter Jacket, Boots, Face Mask',
            'Heavy Blowing Sand': 'Face Mask, Eye Protection, Light Jacket',
            'Light Blowing Sand': 'Face Mask, Eye Protection, Light Jacket',
            'Light Rain Mist': 'Umbrella, Waterproof Jacket, Long Pants',
            'Heavy Rain Mist': 'Umbrella, Waterproof Jacket, Long Pants',
            'Light Rain Showers': 'Umbrella, Waterproof Jacket, Long Pants',
            'Heavy Rain Showers': 'Umbrella, Waterproof Jacket, Long Pants',
            'Light Snow Showers': 'Umbrella',
            'Heavy Snow Showers': 'Umbrella',
            'Light Snow Blowing Snow Mist': 'Umbrella',
            'Heavy Snow Blowing Snow Mist': 'Umbrella',
            'Heavy Ice Pellet Showers': 'Umbrella',
            'Light Ice Pellet Showers': 'Umbrella',
            'Light Hail Showers': 'Umbrella',
            'Heavy Hail Showers': 'Umbrella',
            'Light Small Hail Showers': 'Umbrella',
            'Heavy Small Hail Showers': 'Umbrella',
            'Heavy Thunderstorm': 'Umbrella, Rain Jacket, Rain Boots, Long Pants',
            'Light Thunderstorm': 'Umbrella, Rain Jacket, Rain Boots, Long Pants',
            'Light Thunderstorms and Rain': 'Umbrella, Rain Jacket, Rain Boots, Long Pants',
            'Heavy Thunderstorms and Rain': 'Umbrella, Rain Jacket, Rain Boots, Long Pants',
            'Light Thunderstorms and Snow': 'Umbrella',
            'Heavy Thunderstorms and Snow': 'Umbrella',
            'Light Thunderstorms and Ice Pellets': 'Umbrella',
            'Heavy Thunderstorms and Ice Pellets': 'Umbrella',
            'Light Thunderstorms with Hail': 'Umbrella',
            'Heavy Thunderstorms with Hail': 'Umbrella',
            'Light Thunderstorms with Small Hail': 'Umbrella',
            'Heavy Thunderstorms with Small Hail': 'Umbrella',
            'Light Freezing Drizzle': 'Umbrella, Waterproof Winter Jacket, Winter Boots, Long Pants, Gloves',
            'Heavy Freezing Drizzle': 'Umbrella, Waterproof Winter Jacket, Winter Boots, Long Pants, Gloves',
            'Light Freezing Rain': 'Umbrella, Waterproof Winter Jacket, Winter Boots, Long Pants, Gloves',
            'Heavy Freezing Rain': 'Umbrella, Waterproof Winter Jacket, Winter Boots, Long Pants, Gloves',
            'Light Freezing Fog;': '',
            'Heavy Freezing Fog;': '',
            'Patches of Fog': '',
            'Shallow Fog': '',
            'Partial Fog': '',
            'Overcast': 'Jacket',
            'Clear': 'Sunblock, Sunglasses',
            'Partly Cloudy': 'Sunglasses',
            'Mostly Cloudy': 'Coat',
            'Scattered Clouds': '',
            'Small Hail': '',
            'Squalls': '',
            'Funnel Cloud': '',
            'Unknown Precipitation': '',
            'Unknown': ''
        };
        for (var key in weatherArr) {
            if (key === weatherStr) {
                return weatherArr[key];
            }
        }
    };
