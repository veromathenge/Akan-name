function validateForm() {
          let name = document.forms["myForm"]["name"].value;
          let birthday = document.forms["myForm"]["birthday"].value;
          let gender = document.forms["myForm"]["gender"].value;
          let message = document.getElementById('msg');
          let men = ['Kwasi','Kwadwo','Kwabena','Kwaku','Yaw', 'Kofi', 'Kwame'];
          let female = ['Akosua','Adwoa','Abenaa','Akua','Yaa', 'Afua', 'Ama'];
           // check date and print message
            if (isValidDate(birthday)) {
                if (gender == "Male") {
                    // const random = Math.floor(Math.random() * men.length);
                    const day =  new Date(stringToDate(birthday, "dd/mm/yyyy","/"));
                    const dayNum = day.getDay();
                    document.getElementById('msg').innerHTML = "Hello "+name + " your were Akan name is "+men[dayNum];
                  } else if (gender == "Female") {
                    // const random = Math.floor(Math.random() * men.length);
                    const day =  new Date(stringToDate(birthday, "dd/mm/yyyy","/"));
                    const dayNum = day.getDay();
                    document.getElementById('msg').innerHTML = "Hello "+name + " your were Akan name is` "+female[dayNum];
                  } else {
                    console.log("NONE SELECTED")
                  }
            }
              else {
                  alert('Invalid date format!');
              }
            return false;
          }
       // Validates that the input string is a valid date formatted as "mm/dd/yyyy"
  function isValidDate(dateString)
            {
              //12/07/2021
                // First check for the pattern
                if(!/^\d{1,2}\/\d{1,2}\/\d{4}$/.test(dateString))
                    return false;
                // Parse the date parts to integers
                var parts = dateString.split("/");
                var day = parseInt(parts[0], 10);
                var month = parseInt(parts[1], 10);
                var year = parseInt(parts[2], 10);
                // Check the ranges of month and year
                if(year < 1000 || year > 3000 || month == 0 || month > 12)
                    return false;
                var monthLength = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
                // Adjust for leap years
                if(year % 400 == 0 || (year % 100 != 0 && year % 4 == 0))
                    monthLength[1] = 29;
                // Check the range of the day
                return day > 0 && day <= monthLength[month - 1];
        };
          //to convet date to string.
   function stringToDate(_date,_format,_delimiter)
            {
                        var formatLowerCase=_format.toLowerCase();
                        var formatItems=formatLowerCase.split(_delimiter);
                        var dateItems=_date.split(_delimiter);
                        var monthIndex=formatItems.indexOf("mm");
                        var dayIndex=formatItems.indexOf("dd");
                        var yearIndex=formatItems.indexOf("yyyy");
                        var month=parseInt(dateItems[monthIndex]);
                        month-=1;
                        var formatedDate = new Date(dateItems[yearIndex],month,dateItems[dayIndex]);
                        return formatedDate;
            }