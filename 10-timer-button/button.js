/* exported $timerButton */
var btn = document.getElementById('btn');

function undo(){
  if(btn.disabled == true){
    btn.disabled = false;
          
  }else{
    btn.disabled = true;
          
  }
  btn.value = '同意';

}
var n=6;
function num(){
  n--;
  btn.value = '同意' + n;  

}


function count(){
  var timer = setInterval(function(){
    num();
          
  },1000);
  setTimeout(function(){
    clearInterval(timer);
    undo();
              
  },6000);

}

count();
