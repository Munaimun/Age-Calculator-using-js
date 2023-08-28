    function age() {
    // input birthdate
    var d1 = parseInt(document.getElementById("date").value);
    var m1 = parseInt(document.getElementById("month").value);
    var y1 = parseInt(document.getElementById("year").value);

    //getiing current date
    var date = new Date();
    var d2 = date.getDate(); 
    var m2 = 1 + date.getMonth(); //current month
    var y2 = date.getFullYear();
    // var month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

    var f1, f2, f3;
    if(d1 > 0 && d1 <= 31 ){
        f1 = true;
    }else {
        alert("invalid date");
    }
    if(m1 <= 12 && m1>0){
        f2 = true;
    }else{
        alert("invalid month");
    }
    if(y1 <= y2 && y1>0){
        f3 = true;
    }else{
        alert("invalid year");
    }

    if(f1 === true && f2 ===true && f3 === true){
    var d = Math.abs(d2 - d1);
    var m = Math.abs(m2 - m1);
    var y = Math.abs(y2 - y1);
    document.getElementById("age").innerHTML =
        "Your Age is " + y + " Years " + m + " Months " + d + " Days";
    }else{
         d1 = document.getElementById("date").value="";
         m1 = document.getElementById("month").value="";
         y1 = document.getElementById("year").value="";
        
    }
   
}