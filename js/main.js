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
// document.querySelector(".visa_filter_div").addEventListener("click",visaFilter)

// // document.querySelector(".exitbutton").addEventListener("click",closeNav)

// // button.addEventListener("click", function () {
// //     content.innerHTML = "Och denna text dyker fram";
// // })

// function visaFilter() {
//     document.getElementById("sok_filter").style.bottom = "0";
// }
// function döljFilter() {
//     document.getElementById("sok_filter").style.bottom = "-120vh";
// }

document.querySelector(".fade-layer").addEventListener("click",showMenu)

document.querySelector(".visa_filter_button").addEventListener("click",visaFilter)

function visaFilter() {
    let menu = document.querySelector("#sok_filter");
    menu.classList.toggle("show");
    // let layor = document.querySelector(".fade-layer");
    // layor.classList.toggle("visible")
}