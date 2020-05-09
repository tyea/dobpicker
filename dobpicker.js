jQuery.extend({

	dobPicker: function (params) {

		// apply defaults
		if (typeof(params.dayDefault) == "undefined") {
			params.dayDefault = "Day";
		}
		if (typeof(params.monthDefault) == "undefined"){
			params.monthDefault = "Month";
		}
		if (typeof(params.yearDefault) == "undefined") {
			params.yearDefault = "Year";
		}
		if (typeof(params.minimumAge) == "undefined") {
			params.minimumAge = 18;
		}
		if (typeof(params.maximumAge) == "undefined") {
			params.maximumAge = 100;
		}

		// find elements
		var dayElement = $(params.daySelector);
		var monthElement = $(params.monthSelector);
		var yearElement = $(params.yearSelector);

		// set days
		dayElement.append("<option value=\"\">" + params.dayDefault + "</option>");
		for (var i = 1; i <= 31; i++) {
			var day = "" + i;
			var value = i > 9 ? "" + i : "0" + i;
			dayElement.append("<option value=\"" + value + "\">" + day + "</option>");
		}

		// set months
		var months = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December"
		];
		monthElement.append("<option value=\"\">" + params.monthDefault + "</option>");
		for (var i = 1; i <= 12; i++) {
			var month = months[i - 1];
			var value = i > 9 ? "" + i : "0" + i;
			monthElement.append("<option value=\"" + value + "\">" + month + "</option>");
		}

		// set years
		var now = (new Date()).getFullYear();
		var minimum = now - params.minimumAge;
		var maximum = minimum - params.maximumAge;
		yearElement.append("<option value=\"\">" + params.yearDefault + "</option>");
		for (i = minimum; i >= maximum; i--) {
			var year = "" + i;
			var value = year;
			yearElement.append("<option value=\"" + value + "\">" + year + "</option>");
		}

		// disable months
		dayElement.change(function () {

			monthElement.selectedIndex = 0;
			yearElement.selectedIndex = 0;
			yearElement.find("option").removeAttr("disabled");

			var day = parseInt(dayElement.val());

			if (day >= 1 && day <= 29) {
				monthElement.find("option").removeAttr("disabled");
			} else if (day == 30) {
				monthElement.find("option").removeAttr("disabled");
				monthElement.find("option[value=\"02\"]").attr("disabled", "disabled");
			} else if(day == 31) {
				monthElement.find("option").removeAttr("disabled");
				monthElement.find("option[value=\"02\"]").attr("disabled", "disabled");
				monthElement.find("option[value=\"04\"]").attr("disabled", "disabled");
				monthElement.find("option[value=\"06\"]").attr("disabled", "disabled");
				monthElement.find("option[value=\"09\"]").attr("disabled", "disabled");
				monthElement.find("option[value=\"11\"]").attr("disabled", "disabled");
			}

		});

		// disable years
		monthElement.change(function () {

			yearElement.selectedIndex = 0;
			yearElement.find("option").removeAttr("disabled");

			var day = parseInt(dayElement.val());
			var month = parseInt(monthElement.val());

			if (day == 29 && month == 2) {
				yearElement.find("option").each(function (index, value) {
					if (index > 0) {
						var option = $(value);
						var year = parseInt(option.attr("value"));
						if (year % 4 == 0) {
							option.attr("disabled", "disabled");
						}
					}
				});
			}

		});

	}

});
