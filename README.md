# DOB Picker

## About

DOB Picker is a jQuery plugin for populating and validating dates of birth.

## Requirements

* jQuery

I wrote and tested this with jQuery 1.11 but I can't see a reason why other versions wouldn't also work.

## Example

Here's an example:

	$(document).ready(function() {
		$.dobPicker({
			daySelector: '#dobday',
			monthSelector: '#dobmonth',
			yearSelector: '#dobyear',
			dayDefault: 'Day',
			monthDefault: 'Month',
			yearDefault: 'Year',
			minimumAge: 12,
			maximumAge: 80
		});
	});

Clone or download this repo and run the `example.html` file. That should give you a good idea how it works and how to use it.

## Parameters

Parameters are passed through a single object when you call the method. Not all of them are required:

* daySelector - The ID of the day dropdown
* monthSelector - The ID of the month dropdown
* yearSelector - The ID of the year dropdown
* dayDefault - Default option value for day dropdown
* monthDefault - Default option value for month dropdown
* yearDefault - Default option value for year dropdown
* minimumAge - Minimum age that you to pick
* maximumAge - Maximum age that you can pick

The elements that the day, month and year selectors target must be select elements. This plugin will not work with anything else.

## Author

Written by Tom Yeadon in November 2014.
