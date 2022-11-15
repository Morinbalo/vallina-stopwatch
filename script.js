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
    if (countTens<10){
        tens.innerHTML='0'+countTens

    }
    else {tens.innerHTML=countTens}
    
if  (countTens ===99){
    countTens=00
    countSec++
    sec.innerHTML=countSec

   if (countSec<10){
    sec.innerHTML='0'+countSec

   } 
   else{   sec.innerHTML=countSec }
    if (countSec===60) {
        countSec=00
  countHundred++
  hundred.innerHTML=countHundred
  if (countHundred<10){
    hundred.innerHTML='0'+countHundred

  }
  else {hundred.innerHTML=countHundred
  }
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
    countTens=00
    countHundred=00
    countSec=00
    
    hundred.innerHTML='0'+countHundred
    sec.innerHTML ='0'+countSec
    tens.innerHTML='0'+countTens
   
    
    
    
}
