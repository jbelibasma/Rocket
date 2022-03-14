'use strict';

/***********************************************************************************/
/* *********************************** DONNEES *************************************/
/***********************************************************************************/

var button = document.getElementById('firing-button')
button.addEventListener('click',clicked)
var image = document.querySelector('#rocket')
function clicked(){
changeImg()
compteur()
setTimeout(function(){
image.classList.add('tookOff');

},10000 )
}
function changeImg(){
    image.src="images/rocket2.gif"
}
var timer=10;
var c=document.querySelector('span')

function compteur(){
    var tr
    tr = window.setInterval(function(){
   
   timer--
    
    c.textContent = timer

    if(timer==0){
        window.clearInterval(tr)
    }
    
    },1000)
}





/***********************************************************************************/
/* ********************************** FONCTIONS ************************************/
/***********************************************************************************/

/*var button = document.getElementById('start')
button.addEventListener('click',clicked)
var buttonA = document.getElementById('arret')
var p = document.querySelector('p')

buttonA.addEventListener('click',stop)
var timer
function clicked(){
timer = window.setInterval(function(){
    var text = p.textContent
text = text +'message '
p.textContent = text

},500)
}


function stop()
{


    setTimeout(function(){
    window.clearInterval(timer)
},2000)
}*/

/************************************************************************************/
/* ******************************** CODE PRINCIPAL **********************************/
/************************************************************************************/
