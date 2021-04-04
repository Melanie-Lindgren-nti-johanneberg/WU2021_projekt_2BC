//Mobil - Meny för alla sidor
document.querySelector(".menu-button").addEventListener("click",openNav)

document.querySelector(".exitbutton").addEventListener("click",closeNav)

function openNav() {
    document.getElementById("mobile_nav").style.left = "0vw";
}
function closeNav() {
    document.getElementById("mobile_nav").style.left = "-120vw";
}

//Mobil - Filter meny
document.querySelector(".visa_filter_button").addEventListener("click",myFunction)

function myFunction() {
    var element = document.getElementById("sok_filter");
    element.classList.toggle("show");

    if (document.querySelector(".visa_filter_button").innerHTML === "Dölj filter") {
        document.querySelector(".visa_filter_button").innerHTML = "Visa filter";
    } else {
        document.querySelector(".visa_filter_button").innerHTML = "Dölj filter";
    }
}

//Datum indexsida

var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;

// let today = new Date().toISOString().slice(0, 10);

// console.log(today);

document.querySelector(".date").innerHTML = today;
// today = mm + '/' + dd + '/' + yyyy;
// document.write(today);