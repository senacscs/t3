//TOP NAVIGATION
function NavBar() {
var x = document.getElementById("myTopnav");
if (x.className === "topnav") {
x.className += " responsive";
} else {
x.className = "topnav";
}
}
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
document.getElementById("navbar").style.top = "0";
document.getElementById("roll_back").style.display = "flex";
} else {
document.getElementById("navbar").style.top = "-100px";
document.getElementById("roll_back").style.display = "none";
}
}
