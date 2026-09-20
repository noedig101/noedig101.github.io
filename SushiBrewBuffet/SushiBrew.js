function incPlayer(){
  var player = Number(document.getElementById("player").innerHTML)
  if(player < 15){
    document.getElementById("player").innerHTML = (player+1).toString();
  }
};

function decPlayer(){
  var player = Number(document.getElementById("player").innerHTML)
  if(player > 5){
    document.getElementById("player").innerHTML = (player-1).toString();
  }
};

