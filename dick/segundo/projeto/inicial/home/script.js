var veri = 1;
var trigger = document.getElementById('menu-trigger')
trigger.addEventListener("click", function () {
    var menu = document.getElementById('menu-hidde');
    if (veri == 1) {
        menu.style.left = "0px";
        trigger.style.left = "185px";
        trigger.style.marginLeft = "2px";
        veri = 0;
    } else {
        menu.style.left = "-100%";
        trigger.style.left = "0";
        trigger.style.marginLeft = null;
        veri = 1;
    }
})