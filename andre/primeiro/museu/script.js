var images=new Array('Assets/BGImages/head_sandwichman1.jpg','Assets/BGImages/head_sandwichman2.jpg','Assets/BGImages/head_sandwichman3.jpg');
var nextimage=0;
doSlideshow();

function doSlideshow(){
    if(nextimage>=images.length){nextimage=0;}
    document.querySelector('.global-header')
    .css('background-image','url("'+images[nextimage++]+'")')
    .fadeIn(500,function(){
        setTimeout(doSlideshow,1000);
    });
}