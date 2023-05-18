alert("Bem vindo a minha pagina");
now = new Date
console.log("Quero dormir")
const greetingMessage = () => {
    let h = new Date().getHours();h
    if (h <= 6) return '<font face = "" size = " 10">Boa madruga</font></br>';
    if (h < 12) return '<font face = "" size = " 10">Bom Dia Minha Tropa</font></br>';
    if (h < 18) return '<font face = "" size = " 10">Boa tarde</font></br>';
    return '<font face = "" size = " 10">Boa noite</font></br>';
    }
    function startTime()
    {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    // add a zero in front of numbers<10
    m=checkTime(m);
    s=checkTime(s);
    document.getElementById('txt').innerHTML=h+":"+m+":"+s;
    t=setTimeout('startTime()',500);
    
    }
    
    function checkTime(i)
    {
    if (i<10)
      {
      i="0" + i;
      }
    return i;
    }
document.getElementById("mensagem").innerHTML = (greetingMessage());
// '<font face = "" size = " 10">Bom Dia Minha Tropa</font></br> //
