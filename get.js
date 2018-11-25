/*
  Julio Barahona M
  141206
  Sistemas y tecnologias web
  Seccion 10
*/

/* variables */
var mensajes = document.getElementById("message");
var chat = document.getElementById("chat");
var oldSize = 0
chat.scrollTop = chat.scrollHeight;
 
getfun();

/* jala y refresca los mensajes */
function make(e) {
    dopost()
    getfun();
}

function make2() {
    dopost()
    getfun();
}


mensajes.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
      console.log("enter");
      console.log()
      make(e);
    }
});

/* descomprime el JSON para desplegar*/
async function getfun(){
  $.getJSON("http://34.210.35.174:7000/").then(function(data){
    if(data.length !== oldSize){
      for(var i = data.length-1;i>-1;i--){
          chat.innerHTML += '<div class="messages"> <p>'+ 
          data[i].nick + 
          "( " + data[i].student_id + " )" +
           ':</p> ' + data[i].text + '</div>'
      }
      oldSize = data.length;
    }
  });
  console.log("getfun");
} 

/* se definen variables fijas y se jala el mensaje dentro del 
elemento html */
function dopost(){
  $.post("http://34.210.35.174:7000/",{
    "student_id": "141206",
    "nick":"Julio Barahona M",
    "text":document.getElementById('message').value
  })
 chat.innerHTML = "";
  document.getElementById('message').value=""};

setInterval(() => getfun(), 10000);