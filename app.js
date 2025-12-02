document.getElementById("homepage").addEventListener("click", paydet);
document.getElementById("choose").addEventListener("click", enter);
document.getElementById("home2").addEventListener("click", home2);
var home_body = document.getElementById("homepage");
var pay_body = document.getElementById("paysec");
var home = document.getElementById("home");
var home2 = document.getElementById("home2");
var choose_class = document.getElementById("choose");
var entr = document.getElementById("entr");



// pay_body.style.display = "none";


// reception.style.display = "none";
// nursery.style.display = "none";
// grade.style.display ="none";
// j_achiever.style.display = "none";
// s_achiever.style.display = "none";

function paydet() {
    home_body.style.display = "none";
    home.style.display = "block";
    choose_class.style.display = "block";
    
}

function home() {
    home_body.style.display = "block";
    home.style.display = "none";
    choose_class.style.display = "none";
}

function home2() {
   var j_achiever1 = document.getElementById("Junior Achievers 1");
    var j_achiever2 = document.getElementById("Junior Achievers 2");
    var j_achiever3 = document.getElementById("Junior Achievers 3");
    var s_achiever1 = document.getElementById("Senior Achievers 1");
    var s_achiever2 = document.getElementById("Senior Achievers 2");
    var s_achiever3 = document.getElementById("Senior Achievers 3");

    home_body.style.display = "none";
    home.style.display = "block";
    choose_class.style.display = "block";
    j_achiever1.style.display = "none";
    j_achiever2.style.display = "none";
    j_achiever3.style.display = "none";
    s_achiever1.style.display = "none";
    s_achiever2.style.display = "none";
    s_achiever3.style.display = "none";
    home2.style.display = "none";
}



 function enter() {
    var j_achiever1 = document.getElementById("Junior Achievers 1");
    var j_achiever2 = document.getElementById("Junior Achievers 2");
    var j_achiever3 = document.getElementById("Junior Achievers 3");
    var s_achiever1 = document.getElementById("Senior Achievers 1");
    var s_achiever2 = document.getElementById("Senior Achievers 2");
    var s_achiever3 = document.getElementById("Senior Achievers 3");
    var junaid = document.getElementById("junaid");

    if(junaid.value == 'Junior Achievers 1') {
        j_achiever1.style.display = "block";
        j_achiever2.style.display = "none";
        j_achiever3.style.display = "none";
        s_achiever1.style.display = "none";
        s_achiever2.style.display = "none";
        s_achiever3.style.display = "none";
        choose_class.style.display = "none";
        home2.style.display = "block";
    }
    else if(junaid.value == 'Junior Achievers 2'){
        j_achiever1.style.display = "none";
        j_achiever2.style.display = "block";
        j_achiever3.style.display = "none";
        s_achiever1.style.display = "none";
        s_achiever2.style.display = "none";
        s_achiever3.style.display = "none";
        choose_class.style.display = "none";
        home2.style.display = "block";
    }
    else if(junaid.value == 'Junior Achievers 3'){
        j_achiever1.style.display = "none";
        j_achiever2.style.display = "none";
        j_achiever3.style.display = "block";
        s_achiever1.style.display = "none";
        s_achiever2.style.display = "none";
        s_achiever3.style.display = "none";
        choose_class.style.display = "none";
        home2.style.display = "block";
    }
    else if(junaid.value == 'Senior Achievers 1') {
        j_achiever1.style.display = "none";
        j_achiever2.style.display = "none";
        j_achiever3.style.display = "none";
        s_achiever1.style.display = "block";
        s_achiever2.style.display = "none";
        s_achiever3.style.display = "none";
        choose_class.style.display = "none";
        home2.style.display = "block";
    }
    else if(junaid.value == 'Senior Achievers 2') {
        j_achiever1.style.display = "none";
        j_achiever2.style.display = "none";
        j_achiever3.style.display = "none";
        s_achiever1.style.display = "none";
        s_achiever2.style.display = "block";
        s_achiever3.style.display = "none";
        choose_class.style.display = "none";
        home2.style.display = "block";
    }
   else if(junaid.value == 'Senior Achievers 3') {
        j_achiever1.style.display = "none";
        j_achiever2.style.display = "none";
        j_achiever3.style.display = "none";
        s_achiever1.style.display = "none";
        s_achiever2.style.display = "none";
        s_achiever3.style.display = "block";
        choose_class.style.display = "none";
        home2.style.display = "block";
   }
   else{
    
   }
   return false;

}

