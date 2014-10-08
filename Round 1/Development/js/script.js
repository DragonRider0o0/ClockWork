$(function()
	{
		
	}
);

function getMonthName(index)
{
	var monthNames = new Array();
	monthNames[0] = "January";
	monthNames[1] = "February";
	monthNames[2] = "March";
	monthNames[3] = "April";
	monthNames[4] = "May";
	monthNames[5] = "June";
	monthNames[6] = "July";
	monthNames[7] = "August";
	monthNames[8] = "September";
	monthNames[9] = "October";
	monthNames[10] = "November";
	monthNames[11] = "December";
	return monthNames[index];
}

function getDayName(index)
{
	var dayOfWeek = new Array(7);
	dayOfWeek[0]=  "Sunday";
	dayOfWeek[1] = "Monday";
	dayOfWeek[2] = "Tuesday";
	dayOfWeek[3] = "Wednesday";
	dayOfWeek[4] = "Thursday";
	dayOfWeek[5] = "Friday";
	dayOfWeek[6] = "Saturday";

	return dayOfWeek[index];
}

function digits(num)
{
	if(num >= 0 && num <= 9)
	{
		num = "0" + num
	}
	return num;
}

function startCurrentTime()
{
	setInterval(function(){getCurrentTime()}, 1000);
}

function getCurrentTime()
{
	var currentDateTime = new Date(); 
	var date = getMonthName(currentDateTime.getMonth()) + " "
		+ currentDateTime.getDate() + ", "
		+ currentDateTime.getFullYear();
	var suffix = "AM";
	var hour = currentDateTime.getHours();
	if( hour > 12)
	{
		hour = hour - 12;
		suffix = "PM"
	}
	if(hour == 0)
	{
		hour = 12;
	}
	var time = (hour) + ":"  
		+ digits(currentDateTime.getMinutes())
		+ suffix;
	document.getElementById("currentDate").innerHTML = date;
	document.getElementById("currentTime").innerHTML = time;
}
