let start =document.querySelector('.start')
let stopst =document.querySelector('.stop')
let reset =document.querySelector('.reset')
let display =document.querySelector('.display')
let sec =document.querySelector('.seconds')
let tens =document.querySelector('.tens')
let hundred =document.querySelector('.hundreds')
let countTens =00
let countSec =00
let countHundred=00
let intervals 
reset.addEventListener('click',resetst)
start.addEventListener('click',inter)
stopst.addEventListener('click',stoptime)

function startbn() {
    countTens++
    
    tens.innerHTML=countTens

if  (countTens ===99){
    countTens=00
    countSec++
    sec.innerHTML=countSec
    
    if (countSec===60) {
        countSec=00
  countHundred++
  hundred.innerHTML=countHundred

countTens++

}
}


}


function inter (){
intervals=setInterval(startbn,10)
    
    

    
}
function stoptime() {
   clearInterval(intervals) 
  

}
function resetst() {
    clearInterval(intervals)
    hundred.innerHTML=0
    sec.innerHTML=0
    tens.innerHTML=0
    
    
    
}
