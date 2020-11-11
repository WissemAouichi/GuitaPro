//Get the necessary elements
var myperiod1 = document.getElementById("period1");
var myperiod2 = document.getElementById("period2");
var myperiod3 = document.getElementById("period3");
var myperiod4 = document.getElementById("period4");
var myperiod5 = document.getElementById("period5");

function gotopage() {
    if (myperiod1.checked == true) {
        window.open("beginner.html", "_self");
    }
    else if (myperiod2.checked == true) {
        window.open("beginner/beginnerg21.html", "_self")
    }
    else if (myperiod3.checked == true) {
        window.open("inter.html", "_self")
    }
    else if (myperiod2.checked == true) {
        window.open("inter/inter2.html", "_self")
    }
    else if (myperiod2.checked == true) {
        window.open("adv.html", "_self")
    }
}