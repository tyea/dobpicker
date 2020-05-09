# DOB Picker

## About

DOB Picker is a jQuery plugin for populating and validating dates of birth.

## Requirements

* jQuery >= 1.11

## Installation

You can use Yarn as follows:

	yarn add https://github.com/tyea/dobpicker.git#1.0.0

## Example

```
<select id="dob-day"></select>
<select id="dob-month"></select>
<select id="dob-year"></select>
<script>
	$(document).ready(function () {
		$.dobPicker({
			daySelector: "#dob-day",
			monthSelector: "#dob-month",
			yearSelector: "#dob-year",
			dayDefault: "Day",
			monthDefault: "Month",
			yearDefault: "Year",
			minimumAge: 18,
			maximumAge: 100
		});
	});
</script>
```

## Author

Written by Tom Yeadon in November 2014.
