	var companyEmailId = "formCompanyEmail";
	var employeeEmailId = "formEmployeeEmail";
	var nameId = "formName";
	var dateId = "formDate";
	var startId = "formStartTime";
	var stopId = "formStopTime";
	var durationHoursId = "durationHour";
	var durationMinutesId = "durationMinute";
	var durationSecondsId = "durationSecond";
	var latitudeId = "formLatitude";
	var longitudeId = "formLongitude";
	var notesId = "formNotes";
	var location;

$(document).ready(function()
{
	// Get and set company email
	var companyEmailField = $("#" + companyEmailId);
	companyEmailField.val("DragonRider0o0@gmail.com");
	
	// Get and set employee email
	var employeeEmailField = $("#" + employeeEmailId);
	employeeEmailField.val("DragonRider0o0@gmail.com");
	
	// Get and set employee name
	var nameField = $("#" + nameId);
	nameField.val("Michael Richardson");
	
	// Get and set start time
	var startField = $("#" + startId);
	var currentHours = new Date().getHours();
	if(currentHours < 10) 
	{ 
		currentHours = "0" + currentHours;
	}
	var currentMinutes = new Date().getMinutes();
	if(currentMinutes < 10) 
	{ 
		currentMinutes = "0" + currentMinutes;
	}
	var startTime = currentHours + ":" + currentMinutes;
	startField.val(startTime);
	
	// Get and set stop time
	var stopField = $("#" + stopId);
	
	var currentHours = new Date().getHours();
	if(currentHours < 10) 
	{ 
		currentHours = "0" + currentHours;
	}
	var currentMinutes = new Date().getMinutes();
	if(currentMinutes < 10) 
	{ 
		currentMinutes = "0" + currentMinutes;
	}
	
	var stopTime = currentHours + ":" + currentMinutes;
	stopField.val(stopTime);
	
	// Get and set hour duration
	var durationHoursField = $("#" + durationHoursId);
	durationHoursField.val("9");
	
	// Get and set minute duration	
	var durationMinutesField = $("#" + durationMinutesId);
	durationMinutesField.val("07");
	
	// Get and set seconds duration	
	var durationSecondsField = $("#" + durationSecondsId);
	durationSecondsField.val("06");
	
	// Get and set date
	var dateField = $("#" + dateId);
	var currentDate = new Date().getDate();
	if(currentDate < 10) 
	{ 
		currentDate = "0" + currentDate;
	}
	var currentMonth = new Date().getMonth()+1;
	if(currentMonth < 10) 
	{ 
		currentMonth = "0" + currentMonth;
	}
	var currentYear = new Date().getFullYear();
	dateField.val(currentYear + "-" + currentMonth + "-" + currentDate);
	
	if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(getPosition);
		//console.log(location);
    }
	// Get and set latitude
	//var latitudeField = $("#" + latitudeId);
	//latitudeField;ield.val()
	//console.log(startTime, stopTime);
});

function getPosition(position) 
{
    console.log(location);
	location = { 'latitude': position.coords.latitude, 'longitude': position.coords.longitude};
    
	return location;
}

		