//function that recommends clothing based on that the temperature is outside

var temperatureClothing = function(temp_f){
		if (temp_f >= 90){
			return 'lightweight clothing, shorts, t-shirt, tank top, sandals, stay indoors in air conditioning when possible';
		}
		else if (temp_f >= 80 && temp_f < 90){
			return 'lightweight clothing, shorts, t-shirt, tank top, sandals';
		}
		else if (temp_f >= 65 && temp_f < 80){
			return 'pants, short or long sleeved shirt, light jacket or sweater, shoes or sandals';
		}
		else if (temp_f >= 55 && temp_f < 65){
			return 'pants, long sleeved shirt, light jacket or sweater, shoes';
		}
		else if (temp_f >= 40 && temp_f < 55){
			return 'long pants, long sleeved shirt, jacket or sweater, shoes';

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