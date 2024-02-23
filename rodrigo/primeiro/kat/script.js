function getRandomImage() {  
    var randomImage = new Array();  
      
    randomImage[0] = "https://placekitten.com/300/300";  
    randomImage[1] = "https://placekitten.com/400/300";  
    randomImage[2] = "https://placekitten.com/200/300";  
    randomImage[3] = "https://placekitten.com/500/300";  
    randomImage[4] = "https://placekitten.com/500/700";  
    randomImage[5] = "https://placekitten.com/100/300";
    randomImage[6] = "https://placekitten.com/800/700";
    randomImage[7] = "https://placekitten.com/900/3500";
    randomImage[8] = "https://placekitten.com/160/900";
    randomImage[9] = "https://placekitten.com/200/400";
       
    var number = Math.floor(Math.random()*randomImage.length);  
      
    return document.getElementById("result").innerHTML = '<img src="'+randomImage[number]+'" />';  
    }  
      