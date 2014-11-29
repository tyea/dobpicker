# jQuery DOB Picker Plugin

### Introduction

This plugin will populate and validate (kind of) dates of birth. You'll need to include jQuery (obviously) and then pass it the IDs of the elements you want to use. See below for more details.

### Requirements

None other than the jQuery library. I wrote and tested this with version 1.11 but I can't see a reason why other versions wouldn't also work.

### Example

Here's an example:

	$(document).ready(function(){
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

Download this repo and run the `example.html` file. That should give you a good idea how it works and how to use it.

### Parameters

Parameters are passed through a single object when you call the method. Not all of them are required:

* daySelector - The ID of the day dropdown
* monthSelector - The ID of the month dropdown
* yearSelector - The ID of the year dropdown
* dayDefault - Default option value for day dropdown
* monthDefault - Default option value for month dropdown
* yearDefault - Default option value for year dropdown
* minimumAge - Minimum age that you to pick
* maximumAge - Maximum age that you can pick

*Note: The elements that the day, month and year selectors target must be select elements. This plugin will not work with anything else.*

### Other

Written by Tom Yeadon (that's me). My website is http://www.tomyeadon.com incase you're interested. This plugin is released under the MIT license.