function age() {
    // input birthdate
    var d1 = parseInt(document.getElementById("date").value);
    var m1 = parseInt(document.getElementById("month").value);
    var y1 = parseInt(document.getElementById("year").value);

    // getting current date
    var date = new Date();
    var d2 = date.getDate();
    var m2 = 1 + date.getMonth(); //current month
    var y2 = date.getFullYear();

    var f1, f2, f3;
    if (d1 > 0 && d1 <= 31) {
        f1 = true;
    } else {
        alert("Invalid date");
    }
    if (m1 <= 12 && m1 > 0) {
        f2 = true;
    } else {
        alert("Invalid month");
    }
    if (y1 <= y2 && y1 > 0) {
        f3 = true;
    } else {
        alert("Invalid year");
    }

    if (f1 === true && f2 === true && f3 === true) {
        var ageYears = y2 - y1;
        var ageMonths = m2 - m1;
        var ageDays = d2 - d1;

        if (ageDays < 0) {
            ageMonths--;
            var daysInPreviousMonth = new Date(y2, m2 - 1, 0).getDate();
            ageDays = daysInPreviousMonth + ageDays;
        }

        if (ageMonths < 0) {
            ageYears--;
            ageMonths = 12 + ageMonths;
        }

        if (ageYears > 0) {
            document.getElementById("age").textContent =
                "Your Age is " + ageYears + " Years " + ageMonths + " Months " + ageDays + " Days";
        } else if (ageMonths > 0) {
            document.getElementById("age").textContent =
                "Your Age is " + ageMonths + " Months " + ageDays + " Days";
        } else {
            document.getElementById("age").textContent =
                "Your Age is " + ageDays + " Days";
        }
    } else {
        document.getElementById("date").value = "";
        document.getElementById("month").value = "";
        document.getElementById("year").value = "";
    }
}
