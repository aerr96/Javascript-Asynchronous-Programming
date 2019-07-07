var count=0;
var estado= "stop";
var boton1= document.getElementById("on");
var boton2= document.getElementById("reset");
var boton3= document.getElementById("load");
var cuenta= document.getElementById("sum");
document.addEventListener('keypress',handleKeyPress);

setup();

function print(){
  if (estado=="stop"){
    estado="start";
    }else {
   estado="stop";
  }
   var interval = setInterval(function(){
     if (estado=="stop"){
       clearInterval(interval);
     }else{
     count=count+0.01;
     cuenta.innerHTML=count.toFixed(2);
     }
   },100);
}
function reset(){
  count=0;
  cuenta.innerHTML="0";
  save.innerHTML="";
  
}

function handleKeyPress(event){
    var keyPressed= event.key;
    if(keyPressed=="s"){
      print();
    }
    if(keyPressed=="r"){
      reset();
    }
    if(keyPressed=="t"){
      load();
    }
}

function load(){
  save.innerHTML += (count.toFixed(2) + '<br>');
}

function setup(){
  boton1.addEventListener('click',function(){
    print();
  });
   boton2.addEventListener('click',function(){
    reset();
  });
  boton3.addEventListener('click',function(){
    load();
  });
}