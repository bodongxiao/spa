var demoImg = document.getElementById("demo_img");
  var demoInput = document.getElementById("demo_input");
    
  function look(){
    if (demoInput.type == "password") {
            demoInput.type = "text";
                  demo_img.src = "visible.png";
                      
    }else {
            demoInput.type = "password";
                  demo_img.src = "invisible.png";
                      
    }
      
  }
  
function unlook(){
  if(demoInput.type == "text"){
          demoInput.type = "password";
                demo_img.src = "invisible.png";
                    
  }else{
          demoInput.type = "text";
                demo_img.src = "visible.png";
                    
  }
    
}
