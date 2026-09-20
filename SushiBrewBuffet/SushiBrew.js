function incPlayer(){
  var player = Number(document.getElementById("player").innerHTML)
  if(player < 15){
    document.getElementById("player").innerHTML = (player+1).toString();
  }
};

function decPlayer(){
  var player = Number(document.getElementById("player").innerHTML)
  window.alert(player);
  if(player > 5){
    window.alert("test good");
    document.getElementById("player").innerHTML = (player-1).toString();
  }
};

