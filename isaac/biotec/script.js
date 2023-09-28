var LOOP = document.querySelector(".box");
LOOP.innerHTML = "";

for(var i=0; i<24; i++)
{
var DNA = document.createElement("span");
DNA.style.setProperty('--i', i);
LOOP.appendChild(DNA);
}
  