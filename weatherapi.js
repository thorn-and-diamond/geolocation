//function that recommends clothing based on that the temperature is outside
//5 degree increments

// var temp_f = temperatureClothing

var temperatureClothing = function(temp_f){
		if (temp_f >= 90){
			return 'lightweight clothing, shorts, t-shirts, sandals, stay indoors in air conditioning when possible';
		}
		else if (temp_f >= 80 && temp_f < 90){
			return 'lightweight clothing, shorts, t-shirt, tank top, sandals';
		}
		else if (temp_f >= 65 && temp_f < 80){
			return 'pants, short or long sleeved shirt, light jacket or sweater, shoes';
		}
		else if (temp_f >= 60 && temp_f < 65){
			return 'long pants, long sleeved shirt, light jacket or sweater, shoes';
		}
		else if (temp_f >= 40 && temp_f < 60){
			return 'long pants, long sleeved shirt, jacket or sweater, shoes';
		}
		else if (temp_f >= 30 && temp_f < 40){
			return 'long pants,long sleeved shirt, pullover, jacket, shoes or boots';
		}
		else if (temp_f >= 15 && temp_f < 30){
			return 'long pants,long sleeved shirt, pullover, jacket, shoes or boots, scarf, mittens, tuque';
		}
		else if (temp_f >= 0 && temp_f < 15){
			return 'long pants,long sleeved shirt, pullover, heavy jacket, warm boots, scarf, gloves, tuque';
		}
		else {
			return 'long and very warm pants,long sleeved shirt, pullover, sweater, heavy jacket, warm boots, socks, scarf, gloves, tuque, stay indoors in well heated areas when possible';
		};
			
			
}

 console.log(temperatureClothing(-10))




// 55-60 - Long pants, long sleeved shirt, jacket or sweater, Shoes
// 50-55 - Long pants, long sleeved shirt, sweater, jacket
// 45-50 - Long pants, long sleeved shirt, sweater, jacket
// 40-45-  boots,long sleeved shirt, pants, jacket
// 35-40-  boots, coat, pants, long sleeved shirt
// 25-35 - boots, coat, scarf
// 20-25 - boots, coat, pullover
// 15-20 - boots, coat, hat, warm pants, pullover
// 10-15 - warm boots, socks, winter jacket, warm hat, gloves, sweater
// 0-10 - warm boots, socks, winter jacket, warm hat, gloves, two sweaters
// 	}
// }

