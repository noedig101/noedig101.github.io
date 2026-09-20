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

class Character {
  constructor(name, type, ability, setup = false, jinxes = false){
    this.name = name;
    this.team = type;
    this.ability = ability;
    this.setup = setup;
    this.jinxes = jinxes;
    this.actually = false;
    this.babysitting = false;
  }
  toString(){
    return this.name;
  }
}

var charList = [];

function randomChar(typeCount,currentCount){
  while(true){
      var num = math.floor(math.random()*charList.length);
      window.alert(num);
      var out = charList[num];
      window.alert(out);
      if (out.setup){
        if (out.name == "Faerie"){
          if (typeCount[0] < 1 || typeCount[3] < 1){
            continue
          }else{
            return out;
          }
        }else if (out.name == "Lickspittle"){
          if (typeCount[2] < 1){
            continue
          }else{
            return out;
          }
        }else if (out.name == "Bilge Rat"){
          if (typeCount[2] < 1 || currentCount[1] > 3){
            continue
          }else{
            return out;
          }
        }else if (out.name == "Wendigo"){
          if (typeCount[2] < 1 || typeCount[1] < 1){
            continue
          }else{
            return out;
          }
        }
      }else if (typeCount[out.type] < 1){
        continue
      }else{
        typeCount[out.type]--;
        currentCount[out.type]++;
        window.alert("returning...");
        return out;
      }
  }
  return out;
};

var nextButton = false;
var charButton = false;
function nextButtonPressed(){
  nextButton = true;
};
function button1Pressed(){
  charButton = 1;
};
function button2Pressed(){
  charButton = 2;
};
function button3Pressed(){
  charButton = 3;
};

function waitForButton(button){
  if ((button == "nextButton" && nextButton) || (button == "char" && charButton)){
    return;
  }else{
    window.alert("before wait");
    setTimeout("waitForButton(button)",1000);
    window.alert("after all waiting");
  }
};

function startDraft(){
  charList = [
    new Character("Archer",0,"You start knowing how many Minions are between you and the nearest clockwise Demon."),
    new Character("Archivist",0,"Each day, you may visit the Storyteller & privately ask a yes/no question about the Demon's ability."),
    new Character("Blacksmith",0,"The 1st time the Demon kills you, you live & gain a not-in-play Townsfolk ability."),
    new Character("Boatswain",0,"You start knowing the largest number of good players neighboring each other."),
    new Character("Bookbinder",0,"You start knowing a not-in-play Townsfolk. While you are \"mad\" that you are that character, you cannot die.",false,["Deacon"]),
    new Character("Buccaneer",0,"Each night*, choose 2 players (not yourself): if they are different alignments, you die."),
    new Character("Candlemaker",0,"On your 1st night, choose three players. If you die at night, you learn if one of them killed you."),
    new Character("Coal Miner",0,"If you are killed by an opposing player's ability, a living good player becomes a Survivalist tonight."),
    new Character("Conspiracist",0,"Each night, learn an evil player or Outsider. If a (non-Traveller) neighbor is evil, you get false info."),
    new Character("Coroner",0,"Each night*, choose a character: you learn if they are dead."),
    new Character("Cosmonaut",0,"Each day, you may visit the Storyteller to learn a cryptic hint about the gamestate."),
    new Character("Courtesan",0,"On your 1st day, you may privately visit the Storyteller to learn a statement: you always know if it's true, even if you die at night."),
    new Character("Deacon",0,"The good player who is the most correct can't die."),
    new Character("Dowser",0,"Each night, choose a player (not yourself): you learn how many of their neighbors are evil. Whenever you choose an evil player, you become drunk until dusk."),
    new Character("Duke",0,"Each night, choose a player: you learn a character type they are not."),
    new Character("Faerie",0,"You get 3 bluffs. Each night*, choose a player: they die. You register as \"the/a Demon\" to abilities. If you die, your team loses; if only 2 players live, your team wins; even if drunk or poisoned. [No Demon, +1 Minion]",true,["Coal Miner","Deacon","Grandmaster","Illusionist"]),
    new Character("Falconer",0,"On your 1st night, choose a character: 1-4 nights later, learn who that character is (or that it's not in play), then choose another."),
    new Character("Ferrotypist",0,"You start knowing 2 characters that neighbor each other. Demons register to you as not-in-play characters."),
    new Character("Frog Footman",0,"The first time you are nominated, learn the character of the player who nominated you that night."),
    new Character("Funeral Officiant",0,"Each night, choose a player. You learn the character of players you choose when they die."),
    new Character("Grandmaster",0,"Once per game, visit the Storyteller to privately learn who your most important ally is, but not why they're important."),
    new Character("Hawkshaw",0,"You start knowing a player who is closer to a Minion than to a Demon."),
    new Character("Hieromancer",0,"Each night* learn how many steps from today’s executee to an evil player. If the executee was evil, this info is arbitrary."),
    new Character("Hierophant",0,"Each night, choose a player: you learn how helpful they are being to their team."),
    new Character("Illusionist",0,"If you die, Demons learn their character tonight. [Demons start the game thinking they are other Demons that share the same choices]",true),
    new Character("Lickspittle",0,"Each night, choose a Townsfolk: if an opposing player is that character you swap characters. [-1 Minion, 1 Townsfolk is Evil]",true),
    new Character("Local Hero",0,"You start knowing an in-play opposing character. If an evil ability kills you, that character dies too."),
    new Character("Lookout",0,"Each night, you learn whether an odd or even number of good players woke due to their own ability."),
    new Character("Medium",0,"Once per game, at night*, choose to learn which dead players are evil."),
    new Character("Motorist",0,"Each night, you learn 2 characters, 1 of which is a living neighbor. If you become drunk or poisoned after night 1, you die."),
    new Character("Nosey Parker",0,"Each night, choose 3 evil characters: you learn if any player other than 1 of your neighbors is a chosen character."),
    new Character("Old Seadog",0,"You start knowing 5 characters: 3 not in play & 2 in play."),
    new Character("Outlaw",0,"The first time you or a Townsfolk you are mad about being is put on the block, someone dies."),
    new Character("Powder Monkey",0,"On your 1st day, publicly choose 2 players: if either is a Minion, you & a chosen Minion die tonight."),
    new Character("Prankster",0,"Each night*, choose a player: if a Minion, their ability becomes \"Each night, choose a player: the Demon learns their character.\""),
    new Character("Privateer",0,"Each day, you may privately visit the Storyteller & learn a task. Each night*, if you completed the previous task, you learn an in-play character."),
    new Character("Quickdraw",0,"Each night, you learn 2 characters: if you nominate either the following day & 1 of you votes the other dies; if you both vote, 1 of you dies."),
    new Character("Reactionary",0,"Evil players don't learn each other; instead, they learn a code word. Players who publicly say or hint at the code word might be executed."),
    new Character("Ropemaker",0,"Each night*, choose a Townsfolk: the next time a Townsfolk dies tonight, the chosen Townsfolk dies instead if good & able."),
    new Character("Scofflaw",0,"You start knowing a word or phrase. If you say it publicly while a player on your team is on the block, you might be executed."),
    new Character("Scribe",0,"Each Minion knows a different phrase. Each night*, any Minion that didn't publicly say their phrase today might be drunk until dusk."),
    new Character("Seraph",0,"Good players who you nominate & kill by execution learn you are in play."),
    new Character("Sheriff",0,"Once per game, during the day, you may guess a player’s character: if you get it right, they die. If you die another player might die instead."),
    new Character("Snake Oiler",0,"Other Townsfolk you are mad about being can't be killed by abilities. If you are mad about being a not-in-play Townsfolk, you can't instead."),
    new Character("Sorcerer",0,"Each night, choose a unique player (not yourself): if one of your two most recent picks is a Townsfolk and the other is not, you learn this."),
    new Character("Spice Trader",0,"Each night*, learn how many evil players voted today. If you would learn a 0, you become drunk."),
    new Character("Suitor",0,"You start knowing 2 players: the Storyteller believes 1 will help good & 1 will help evil."),
    new Character("Surgeon",0,"Twice per game, at night*, you may choose a living player: they live if they would die, and vice versa. The Demon cannot die this way."),
    new Character("Tabby",0,"Each night*, choose a player (not yourself or Travellers): if they are a good character & die to evil tonight, you swap characters."),
    new Character("Tactician",0,"The Tactician points to two players. Indicate which one you think that the Demon should kill tonight, if they had to kill one of those two."),
    new Character("Toastmaster",0,"Drunk players are safe from the Demon. Living Townsfolk who say \"cheers\" publicly are drunk until dawn."),
    new Character("Tzar",0,"Each night, you learn an in-play character: this information might be false starting now & from now onwards."),
    new Character("Waiter",0,"You start knowing 2 good players: 1 is drunk, even if you are dead."),
    new Character("Wench",0,"Each day, you may privately visit the Storyteller & learn a true statement about a living neighbor."),
    new Character("Whaler",0,"You start knowing 1 in-play evil character. If the character you know dies, you learn another tonight."),
    new Character("Ambassador",1,"Each night, when an evil player is chosen by an ability, you might be targeted instead (once per night), even if dead."),
    new Character("An Owl",1,"A player babysits An Owl & if good their ability is now: \"At night you might register as an evil Demon.\" If the babysitter is put on the block a new player babysits.",true),
    new Character("Bad Omen",1,"You do not know you are a Bad Omen. You think you are a Townsfolk, but you receive false information. You might register as evil, even if dead.",true),
    new Character("Blabbermouth",1,"You know a phrase. Each dusk, if publicly, no other alive good player said it or a Minion guessed it (even if dead), your team loses."),
    new Character("Cardinal",1,"If nominated, tonight (even if dead), you become the alignment opposite to whoever nominated you."),
    new Character("Conjuror",1,"When you learn that you died, publicly choose a Demon character: from now on, the Demon must have its ability.",false,["Hannibal"]),
    new Character("Deserter",1,"The 1st time a dead player votes, become their alignment tonight."),
    new Character("Fireblood",1,"When either you or a Minion die, an evil player becomes an out-of-play character."),
    new Character("Goldspinner",1,"1 other player might register as good or evil & as a Demon, even if you die. If you guess (once) who it is, become a not-in-play Townsfolk."),
    new Character("Hooligan",1,"You think you are a Minion, but you are not. The Minions know who you are and any Minion that has the same ability knows what you choose at night.",true,["Lickspittle","Reactionary"]),
    new Character("Mermaid",1,"Players (not yourself or the Demon) that nominate you are drunk until you are nominated again, even if you are dead."),
    new Character("Moonflower",1,"If you die & the next executee is good, your team loses."),
    new Character("Palsgrave",1,"Once per game, at night*, if both of your good living neighbours are mad about being their character, one might die."),
    new Character("Rodent",1,"If 1 of your Townsfolk neighbours die, the other is drunk from now on, even if you are dead."),
    new Character("Sibyl",1,"On your 1st day, privately learn a condition, day & consequence. If unmet by then, it happens, even if dead."),
    new Character("Turncoat",1,"On your 1st night, choose another player. The 1st time one of you dies by execution, the other turns evil that night."),
    new Character("Winemaker",1,"Your Townsfolk neighbours are drunk, but every other night, you are drunk until dusk, even if you are dead."),
    new Character("Worrywort",1,"Public and private announcements might be false, even if you are dead."),
    new Character("Agent",2,"On Night 1, look at the characters in the Grimoire. Minions mad about being other players' characters & those players might register as each other.",false,["Illusionist","Antipath","Songstress"]),
    new Character("Antipath",2,"Each night*, you may choose a player: if the Demon, you die, otherwise, they die. If you'd die, you might not. You don't know other evil players, and they don't know you."),
    new Character("Augur",2,"If a Townsfolk nominates you, they immediately become a Bad Omen."),
    new Character("Azure Robe",2,"If you die by execution, each night*, choose a player: they die."),
    new Character("Bilge Rat",2,"Outsiders poison Townsfolk they nominate until dawn. [Exactly 3 Outsiders]",true),
    new Character("Bogle",2,"Each night*, if you were mad today about having an ability that kills at night, choose a player and a non-Demon character: they gain that character's ability.",false,["Cardinal","Deserter"]),
    new Character("Carpenter",2,"If you die by execution, your nominator becomes evil & a not-in-play Minion tonight."),
    new Character("Chariot",2,"Each night, choose 2 alive players (not yourself): if one is executed tomorrow, the other is instead."),
    new Character("Chessmaster",2,"You start by choosing a player to poison. You know & have their ability. If they die, choose again.",false,["Cardinal","Deserter"]),
    new Character("Exiled",2,"You start with an Outsider ability of your choice. [+1 or -1 Outsiders]",true,["An Owl","Cardinal","Deserter"]),
    new Character("Folly",2,"1 Outsider knows you're in-play. Players who are mad an Outsider is an Outsider might be executed. [+0 or +1 Outsider]",true),
    new Character("Informant",2,"Each night, choose a player: that player registers as the opposite alignment and as a character of that alignment tonight and tomorrow day."),
    new Character("Lepidopterist",2,"While 4 or more players live, the first non-Townsfolk to be executed cannot die."),
    new Character("Lunger",2,"You think you are a non-Minion & might die. The first Lunger to die becomes evil at night & learns an evil player. [+1 good Lunger, You are good]",true,["Hooligan"]),
    new Character("Propagandist",2,"You start knowing a word or phrase; if it has been said at least 3 times publicly, someone might be executed when it is said (once)."),
    new Character("Queeg 500",2,"Each night*, choose an alive player: a chosen evil player swaps characters with you."),
    new Character("Sea Spirit",2,"On your 1st night, choose a good player: they are poisoned. If they live while only 3 players live, your team wins, even if you are dead. 1 good player knows a Sea Spirit is in play."),
    new Character("Sollos",2,"The Demon & a good player (you know who) know they might register as each other's character. If the good player is executed, evil wins."),
    new Character("Songstress",2,"You & a good player know of the other's character. If you guess them while they live (once), evil wins."),
    new Character("Sphinx",2,"Each night, choose a player: tomorrow the Storyteller will publicly ask them a yes/no question & if they get it wrong they might be executed."),
    new Character("Survivalist",2,"You have the ability of the most recent Townsfolk or other Minion to be killed by a player."),
    new Character("Temptress",2,"On your 1st night choose two players: they learn that they were chosen. The 1st time one of them dies by execution, the other becomes evil that night."),
    new Character("Trader",2,"You know a night & a Minion ability you have. On that night, your ability is replaced & 1 good player learns your old one.",false,["Lunger","Wendigo"]),
    new Character("Vampire",2,"The 1st evil player nominated by evil today lives if executed. Townsfolk who nominate you poison you both until dawn."),
    new Character("Wendigo",2,"You think you are a good character, but an evil player knows you are the Wendigo. Players you nominate or choose at night might die until dawn. [-1 Outsider]",true,["Hooligan"]),
    new Character("Wight",2,"The 1st player you nominated while alive and voted for while dead are poisoned (even when dead)."),
    new Character("Wyvern",2,"Each night*, a good player who voted for you today might die, even if you are dead."),
    new Character("Azgoat",3,"Each night, you may choose 2 players: they die tomorrow night. The chosen player that is the most dishonest tomorrow might not die."),
    new Character("Bloodwrite",3,"Each night, you may choose 2 players (they learn this): they die tomorrow night. Players who offer the most might not die."),
    new Character("Calypso",3,"Each night, choose 3 players. The 1st player you chose last night dies. If that player was executed today, the other 2 players die tonight."),
    new Character("Dormaquino",3,"Each night, choose 3 players: they receive false private announcements. Each night*, a player who was chosen the previous night dies."),
    new Character("Gi Yose",3,"Once per game on night X, choose X players: they might die after the vote if nominated. All other nights*, a player dies."),
    new Character("Grue",3,"Once per game on night X, choose X players (they learn this): if they fail to vote while alive they might be executed. All other nights*, a player dies."),
    new Character("Hannibal",3,"You think you are a good character, but you are not. Minions learn 3 bluffs. Each night*, a player might die. The 1st Hannibal to die, becomes good. [+1 Hannibal]",true,["Illusionist"]),
    new Character("Hethaesta",3,"Only you & 1 good player know what your ability is. If an evil player dies, it becomes, \"Each night*, choose a player: they die.\""),
    new Character("Hollow",3,"Players might die. On your 2nd night, choose a player & a direction: they receive false information & this effect spreads to the next unaffected player in that direction every dusk."),
    new Character("Inysyns",3,"You start knowing a day. On that day (from dawn to dusk) if good would win, evil wins instead. Each night*, choose a player: they die."),
    new Character("Ivyth",3,"Each night*, choose a player: they die. If 5 or more players live, 1 good player learns when you die & a Minion becomes Ivyth."),
    new Character("Kraken",3,"Each night*, choose a player: they die. The 1st time you kill an Outsider, 1 of their living good neighbors die too. [−1 or +1 Outsider]",true),
    new Character("Kukalpa",3,"Each night*, even if dead, choose a player: they die. The 1st player (not yourself) to nominate you \"is the Demon\" instead of you.",false,["Illusionist"]),
    new Character("Moondweller",3,"Each night*, choose a player: they die. Good players learn false information after learning about you."),
    new Character("Nocker",3,"A player babysits Nocker & their ability is now: \"Each night*, choose a player: they die.\" If the babysitter is chosen at night another living evil player babysits. [+1 Minion]",true,["Bookbinder","Illusionist","Conjuror"]),
    new Character("Nol Sign",3,"Each night, choose a player (they learn this): they are mad about receiving a different announcement or they might be executed; they die at night (not tonight)."),
    new Character("Nosos",3,"Each night, choose a player: they become poisoned. Poisoned players might die. Outsiders you poison learn this."),
    new Character("Ouroboros",3,"On your 2nd night, choose a player & a direction: they die & each subsequent night the next player in that direction you can kill dies. Minions also count as \"the Demon\". You keep your ability while dead."),
    new Character("Vox Natorum",3,"Each night*, choose 2 players: 1 dies, the other might switch characters with you &  alignments with another player (once).  Minions might die."),
    new Character("Woehelm",3,"Each night*, choose 2 players: if they vote, they die. If no one died today, non-Demons chosen at night die."),
    new Character("Yng",3,"Each night*, choose a player: they die. If only 3 non-Traveller players live, you die if & only if your clockwise living neighbor is executed. 1 good player knows you're in play.")
  ];
  window.alert("charList init")
  var players = Number(document.getElementById("player").innerHTML);
  var typeCount = [
    null,
    null,
    null,
    null,
    null,
    [3,0,1,1],
    [3,1,1,1],
    [5,0,1,1],
    [5,1,1,1],
    [5,2,1,1],
    [7,0,2,1],
    [7,1,2,1],
    [7,2,2,1],
    [9,0,3,1],
    [9,1,3,1],
    [9,2,3,1]
  ];
  typeCount = typeCount[players];
  currentCount = [0,0,0,0];
  var choices = [];
  for(k=players;k--;k>0){
    choices.push(null);
  }
  var bluffs = [];
  var Lunger = false;
  var Hanni = false;
  var Owl = false;
  var Nocker = false;
  while(players>0){
    if (!(Owl || Nocker)){
      while(true){
        var currentPlayer = math.floor(math.random()*choices.length)
        if (choices[currentPlayer] == null){
          break
        }
      }
    window.alert(currentPlayer)
    document.getElementById("nextButton").innerHTML = "Wake Seat "+currentPlayer.toString();
    waitForButton("nextButton");
    nextButton = false;
    document.getElementById("nextButton").innerHTML = "";
    }
    window.alert("nextButton")
    if (!(Owl || Nocker)){
      char1 = randomChar(typeCount,currentCount);
      while (true){
        char2 = randomChar(typeCount,currentCount);
        if (char2.name != char1.name){
          continue
        }
      }
      while (true){
        char3 = randomChar(typeCount,currentCount);
        if (char3.name != char2.name && char3.name != char1.name){
          continue
        }
      }
    }else if (Owl){
      char1 = randomChar([100,0,0,0],currentCount);
      while (true){
        char2 = randomChar([100,0,0,0],currentCount);
        if (char2.name != char1.name){
          continue
        }
      }
      while (true){
        char3 = randomChar([100,0,0,0],currentCount);
        if (char3.name != char2.name && char3.name != char1.name){
          continue
        }
      }
    }else if (Nocker){
      char1 = randomChar([0,0,100,0],currentCount);
      while (true){
        char2 = randomChar([0,0,100,0],currentCount);
        if (char2.name != char1.name){
          continue
        }
      }
      while (true){
        char3 = randomChar([0,0,100,0],currentCount);
        if (char3.name != char2.name && char3.name != char1.name){
          continue
        }
      }
    }

    
    if (char1.name == "Bad Omen"){
      char1 = randomChar([100,0,0,0],[0,0,0,0]);
      char1.actually = "Bad Omen";
    }else if (char1.name == "Hooligan"){
      char1 = randomChar([0,0,100,0],[0,0,0,0]);
      char1.actually = "Hooligan";
    }else if (char1.name == "Lunger"){
      char1 = randomChar([100,100,0,0],[0,0,0,0]);
      char1.actually = "Lunger";
    }else if (char1.name == "Wendigo"){
      char1 = randomChar([100,100,0,0]);
      char1.actually = "Wendigo";
    }else if (char1.name == "Hannibal"){
      char1 = randomChar([100,100,0,0],[0,0,0,0]);
      char1.actually = "Hannibal";
    }
    if (char2.name == "Bad Omen"){
      char2 = randomChar([100,0,0,0],[0,0,0,0]);
      char2.actually = "Bad Omen";
    }else if (char2.name == "Hooligan"){
      char2 = randomChar([0,0,100,0],[0,0,0,0]);
      char2.actually = "Hooligan";
    }else if (char2.name == "Lunger"){
      char2 = randomChar([100,100,0,0],[0,0,0,0]);
      char2.actually = "Lunger";
    }else if (char2.name == "Wendigo"){
      char2 = randomChar([100,100,0,0]);
      char2.actually = "Wendigo";
    }else if (char2.name == "Hannibal"){
      char2 = randomChar([100,100,0,0],[0,0,0,0]);
      char2.actually = "Hannibal";
    }
    if (char3.name == "Bad Omen"){
      char3 = randomChar([100,0,0,0],[0,0,0,0]);
      char3.actually = "Bad Omen";
    }else if (char3.name == "Hooligan"){
      char3 = randomChar([0,0,100,0],[0,0,0,0]);
      char3.actually = "Hooligan";
    }else if (char3.name == "Lunger"){
      char3 = randomChar([100,100,0,0],[0,0,0,0]);
      char3.actually = "Lunger";
    }else if (char3.name == "Wendigo"){
      char3 = randomChar([100,100,0,0]);
      char3.actually = "Wendigo";
    }else if (char3.name == "Hannibal"){
      char3 = randomChar([100,100,0,0],[0,0,0,0]);
      char3.actually = "Hannibal";
    }

    document.getElementById("char1").innerHTML = char1.name;
    document.getElementById("desc1").innerHTML = char1.ability;
    document.getElementById("char2").innerHTML = char1.name;
    document.getElementById("desc2").innerHTML = char1.ability;
    document.getElementById("char3").innerHTML = char1.name;
    document.getElementById("desc3").innerHTML = char1.ability;

    waitForButton("char");

    if (charButton == 1){
      choices[currentPlayer] = char1;
      bluffs.push(char2.name);
      bluffs.push(char3.name);
    }else if (charButton == 2){
      choices[currentPlayer] = char2;
      bluffs.push(char1.name);
      bluffs.push(char3.name);
    }else if (charButton == 3){
      choices[currentPlayer] = char3;
      bluffs.push(char1.name);
      bluffs.push(char2.name);
    }
    var oMod = false;
    currentChar = choices[currentPlayer];
    if (!currentChar.actually){
      if (currentChar.name == Lickspittle){
        typeCount[2]--;
        currentCount[0]++;
      }else if (currentChar.name == "Faerie"){
        typeCount[3]--;
        typeCount[0]--;
        CurrentCount[0]++;
        typeCount[2]++;
      }else if (currentChar.name == "Bilge Rat"){
        typeCount[0]-= 3 - currentCount[1] - typeCount[1];
        typeCount[1] = 3 - currentCount[1];
        typeCount[2]--;
        currentCount[2]++;
      }else if (currentChar.name == "Exiled"){
        typeCount[2]--;
        currentCount[2]++;
        oMod = [-1,1];
      }else if (currentChar.name == "Folly"){
        typeCount[2]--;
        currentCount[2]++;
        oMod = [0,1];
      }else if (currentChar.name == "Kraken"){
        typeCount[3]--;
        currentCount[3]++;
        oMod = [-1,1];
      }else if (currentChar.name == "An Owl"){
        typeCount[0]++;
        typeCount[1]--;
        Owl = true;
      }else if (currentChar.name == "Nocker"){
        typeCount[2]++;
        typeCount[3]--;
        Nocker = true;
      }
    }else{
      if (currentChar.actually == "Bad Omen"){
        typeCount[1]--;
        currentCount[1]++;
      }else if (currentChar.actually == "Hooligan"){
        typeCount[1]--;
        currentCount[1]++;
      }else if (currentChar.actually == "Lunger"){
        typeCount[2]--;
        currentCount[2]++;
        Lunger = true;
      }else if (currentChar.actually == "Wendigo"){
        typeCount[2]--;
        currentCount[2]++;
        typeCount[1]--;
        typeCount[0]++;
      }else if (currentChar.actually == "Hannibal"){
        typeCount[3]--;
        currentCount[3]++;
        Hanni = true;
      }
    }
    if (Owl){
      currentChar.babysitting = "An Owl";
      Owl = false;
    }else if (Nocker){
      currentChar.babysitting = "Nocker";
      Nocker = false;
    }
    if (!(Nocker || Owl)){
      document.getElementById("nextButton").innerHTML = "ST: Seat "+currentPlayer.toString()+" Chose "+currentChar.name+" (Continue)";
      waitForButton("nextButton");
      nextButton = false;
      document.getElementById("nextButton").innerHTML = "";
    }
  }
  //Illusionist, Lunger(Second), Hannibal(Second)
  window.alert(choices);
};
