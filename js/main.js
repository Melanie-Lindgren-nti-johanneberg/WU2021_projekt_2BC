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