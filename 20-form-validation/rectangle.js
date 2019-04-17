/* global Rectangle: true */
var wid = document.getElementById('width');
var hei = document.getElementById('height');
var btn = document.getElementById('calculate');
var per = document.getElementById('perimeter');
var are = document.getElementById('area');
var null_wid = document.getElementById('null_wid');
var null_hei = document.getElementById('null_hei');
var tip_wid = document.getElementById('tip_wid');
var tip_hei = document.getElementById('tip_hei');
var unnum_wid = document.getElementById('unnum_wid');
var unnum_hei = document.getElementById('unnum_hei');
var unzero_wid = document.getElementById('unzero_wid');
var unzero_hei = document.getElementById('unzero_hei');
var reg = /^-?[0-9]*$/;
function checkwid(){
  if(wid.value == ""){
        tip_wid.style.display = 'none';
            unnum_wid.style.display = 'none';
                unzero_wid.style.display = 'none';
                    null_wid.style.display = 'block';
                      
  }else if(!reg.test(wid.value)){
        tip_wid.style.display = 'none';
            null_wid.style.display = 'none';
                unzero_wid.style.display = 'none';
                    unnum_wid.style.display = 'block';
                      
  }else if(wid.value < 0){
        tip_wid.style.display = 'none';
            unnum_wid.style.display = 'none';
                null_wid.style.display = 'none';
                    unzero_wid.style.display = 'block';
                      
  }else{
        tip_wid.style.display = 'none';
            unnum_wid.style.display = 'none';
                null_wid.style.display = 'none';
                    unzero_wid.style.display = 'none';
                      
  }

}
function checkhei(){
  if(hei.value == ""){
        tip_hei.style.display = 'none';
            unnum_hei.style.display = 'none';
                unzero_hei.style.display = 'none';
                    null_hei.style.display = 'block';
                      
  }else if(!reg.test(hei.value)){
        tip_hei.style.display = 'none';
            null_hei.style.display = 'none';
                unzero_hei.style.display = 'none';
                    unnum_hei.style.display = 'block';
                      
  }else if(hei.value < 0){
        tip_hei.style.display = 'none';
            unnum_hei.style.display = 'none';
                null_hei.style.display = 'none';
                    unzero_hei.style.display = 'block';
                      
  }else{
        tip_hei.style.display = 'none';
            unnum_hei.style.display = 'none';
                null_hei.style.display = 'none';
                    unzero_hei.style.display = 'none';
                      
  }

}
function doit(){
  if(wid.value != "" && hei.value != ""){
        per.value = 2*wid.value + 2*hei.value;
            are.value = wid.value * hei.value;
              
  }

}

