function incPlayer(){
  var player = Number(document.getElementById("player").innerHTML)
  if(player < 15){
    document.getElementById("player").innerHTML = (player+1).toString();
  }
};

function decPlayer(){
  var player = Number(document.getElementById("player").innerHTML)
  console.log(player);
  if(player > 5){
    console.log("test good");
    document.getElementById("player").innerHTML = (player-1).toString();
  }
};

