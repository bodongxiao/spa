var num = document.getElementById('prog');
var wid = parseInt(num.style.width);

function begin(){
  var timer = setInterval(function(){
              wid++;
                      
  },200);
          num.style.width = wid + "%";
          if(wid=100){
                      clearInterval(timer);
                              
          }

}


function reload(){
    num.style.width = 0 + "%";

}

function pause(){
    wid = 100;

}

