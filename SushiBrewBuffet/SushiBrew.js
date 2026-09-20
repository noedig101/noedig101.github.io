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
  constructor(name, team, ability, setup = false, jinxes = false){
    this.name = name;
    this.team = team;
    this.ability = ability;
    this.setup = setup;
    this.jinxes = jinxes;
  }
}

function startDraft(){
  var charList = [
    new Character("Archer","TF","You start knowing how many Minions are between you and the nearest clockwise Demon."),
    new Character("Archivist","TF","Each day, you may visit the Storyteller & privately ask a yes/no question about the Demon's ability."),
    new Character("Blacksmith","TF","The 1st time the Demon kills you, you live & gain a not-in-play Townsfolk ability.")
    new Character("Boatswain","TF","You start knowing the largest number of good players neighboring each other."),
    new Character("Bookbinder","TF","You start knowing a not-in-play Townsfolk. While you are \"mad\" that you are that character, you cannot die.",false,["Deacon"]),
    new Character("Buccaneer","TF","Each night*, choose 2 players (not yourself): if they are different alignments, you die."),
    new Character("Candlemaker","TF","On your 1st night, choose three players. If you die at night, you learn if one of them killed you."),
    new Character("Coal Miner","TF","If you are killed by an opposing player's ability, a living good player becomes a Survivalist tonight."),
    new Character("Conspiracist","TF","Each night, learn an evil player or Outsider. If a (non-Traveller) neighbor is evil, you get false info."),
    new Character("Coroner","TF","Each night*, choose a character: you learn if they are dead."),
    new Character("Cosmonaut","TF","Each day, you may visit the Storyteller to learn a cryptic hint about the gamestate."),
    new Character("Courtesan","TF","On your 1st day, you may privately visit the Storyteller to learn a statement: you always know if it's true, even if you die at night."),
    new Character("Deacon","TF","The good player who is the most correct can't die."),
    new Character("Dowser","TF","Each night, choose a player (not yourself): you learn how many of their neighbors are evil. Whenever you choose an evil player, you become drunk until dusk."),
    new Character("Duke","TF","Each night, choose a player: you learn a character type they are not."),
    new Character("Faerie","TF","You get 3 bluffs. Each night*, choose a player: they die. You register as \"the/a Demon\" to abilities. If you die, your team loses; if only 2 players live, your team wins; even if drunk or poisoned. [No Demon, +1 Minion]",true,["Coal Miner","Deacon","Grandmaster","Illusionist"]),
    new Character("Falconer","TF","On your 1st night, choose a character: 1-4 nights later, learn who that character is (or that it's not in play), then choose another."),
    new Character("Ferrotypist","TF","You start knowing 2 characters that neighbor each other. Demons register to you as not-in-play characters."),
    new Character("Frog Footman","TF","The first time you are nominated, learn the character of the player who nominated you that night."),
    new Character("Funeral Officiant","TF","Each night, choose a player. You learn the character of players you choose when they die."),
    new Character("Grandmaster","TF","Once per game, visit the Storyteller to privately learn who your most important ally is, but not why they're important."),
    new Character("Hawkshaw","TF","You start knowing a player who is closer to a Minion than to a Demon."),
    new Character("Hieromancer","TF","Each night* learn how many steps from today’s executee to an evil player. If the executee was evil, this info is arbitrary."),
    new Character("Hierophant","TF","Each night, choose a player: you learn how helpful they are being to their team."),
    new Character("Illusionist","TF","If you die, Demons learn their character tonight. [Demons start the game thinking they are other Demons that share the same choices]",true),
    new Character("Lickspittle","TF","Each night, choose a Townsfolk: if an opposing player is that character you swap characters. [-1 Minion, 1 Townsfolk is Evil]",true),
    new Character("Local Hero","TF","You start knowing an in-play opposing character. If an evil ability kills you, that character dies too."),
    new Character("Lookout","TF","Each night, you learn whether an odd or even number of good players woke due to their own ability."),
    new Character("Medium","TF","Once per game, at night*, choose to learn which dead players are evil."),
    new Character("Motorist","TF","Each night, you learn 2 characters, 1 of which is a living neighbor. If you become drunk or poisoned after night 1, you die."),
    new Character("Nosey Parker","TF","Each night, choose 3 evil characters: you learn if any player other than 1 of your neighbors is a chosen character."),
    new Character("Old Seadog","TF","You start knowing 5 characters: 3 not in play & 2 in play."),
    new Character("Outlaw","TF","The first time you or a Townsfolk you are mad about being is put on the block, someone dies."),
    new Character("Powder Monkey","TF","On your 1st day, publicly choose 2 players: if either is a Minion, you & a chosen Minion die tonight."),
    new Character("Prankster","TF","Each night*, choose a player: if a Minion, their ability becomes \"Each night, choose a player: the Demon learns their character.\""),
    new Character("Privateer","TF","Each day, you may privately visit the Storyteller & learn a task. Each night*, if you completed the previous task, you learn an in-play character."),
    new Character("Quickdraw","TF","Each night, you learn 2 characters: if you nominate either the following day & 1 of you votes the other dies; if you both vote, 1 of you dies."),
    new Character("Reactionary","TF","Evil players don't learn each other; instead, they learn a code word. Players who publicly say or hint at the code word might be executed."),
    new Character("Ropemaker","TF","Each night*, choose a Townsfolk: the next time a Townsfolk dies tonight, the chosen Townsfolk dies instead if good & able."),
    new Character("Scofflaw","TF","You start knowing a word or phrase. If you say it publicly while a player on your team is on the block, you might be executed."),
    new Character("Scribe","TF","Each Minion knows a different phrase. Each night*, any Minion that didn't publicly say their phrase today might be drunk until dusk."),
    new Character("Seraph","TF","Good players who you nominate & kill by execution learn you are in play."),
    new Character("Sheriff","TF","Once per game, during the day, you may guess a player’s character: if you get it right, they die. If you die another player might die instead."),
    new Character("Snake Oiler","TF","Other Townsfolk you are mad about being can't be killed by abilities. If you are mad about being a not-in-play Townsfolk, you can't instead."),
    new Character("Sorcerer","TF","Each night, choose a unique player (not yourself): if one of your two most recent picks is a Townsfolk and the other is not, you learn this."),
    new Character("Spice Trader","TF","Each night*, learn how many evil players voted today. If you would learn a 0, you become drunk."),
    new Character("Suitor","TF","You start knowing 2 players: the Storyteller believes 1 will help good & 1 will help evil."),
    new Character("Surgeon","TF","Twice per game, at night*, you may choose a living player: they live if they would die, and vice versa. The Demon cannot die this way."),
    new Character("Tabby","TF","Each night*, choose a player (not yourself or Travellers): if they are a good character & die to evil tonight, you swap characters."),
    new Character("Tactician","TF","The Tactician points to two players. Indicate which one you think that the Demon should kill tonight, if they had to kill one of those two."),
    new Character("Toastmaster","TF","Drunk players are safe from the Demon. Living Townsfolk who say \"cheers\" publicly are drunk until dawn."),
    new Character("Tzar","TF","Each night, you learn an in-play character: this information might be false starting now & from now onwards."),
    new Character("Waiter","TF","You start knowing 2 good players: 1 is drunk, even if you are dead."),
    new Character("Wench","TF","Each day, you may privately visit the Storyteller & learn a true statement about a living neighbor."),
    new Character("Whaler","TF","You start knowing 1 in-play evil character. If the character you know dies, you learn another tonight."),
    new Character("Ambassador","O","Each night, when an evil player is chosen by an ability, you might be targeted instead (once per night), even if dead."),
    new Character("An Owl","O","A player babysits An Owl & if good their ability is now: \"At night you might register as an evil Demon.\" If the babysitter is put on the block a new player babysits.",true),
    new Character("Bad Omen","O","You do not know you are a Bad Omen. You think you are a Townsfolk, but you receive false information. You might register as evil, even if dead.",true),
    new Character("Blabbermouth","O","You know a phrase. Each dusk, if publicly, no other alive good player said it or a Minion guessed it (even if dead), your team loses."),
    new Character("Cardinal","O","If nominated, tonight (even if dead), you become the alignment opposite to whoever nominated you."),
    new Character("Conjuror","O","When you learn that you died, publicly choose a Demon character: from now on, the Demon must have its ability.",false,["Hannibal"]),
    new Character("Deserter","O","The 1st time a dead player votes, become their alignment tonight."),
    new Character("Fireblood","O","When either you or a Minion die, an evil player becomes an out-of-play character."),
    new Character("Goldspinner","O","1 other player might register as good or evil & as a Demon, even if you die. If you guess (once) who it is, become a not-in-play Townsfolk."),
    new Character("Hooligan","O","You think you are a Minion, but you are not. The Minions know who you are and any Minion that has the same ability knows what you choose at night.",true,["Lickspittle","Reactionary"]),
    new Character("Mermaid","O","Players (not yourself or the Demon) that nominate you are drunk until you are nominated again, even if you are dead."),
    new Character("Moonflower","O","If you die & the next executee is good, your team loses."),
    new Character("Palsgrave","O","Once per game, at night*, if both of your good living neighbours are mad about being their character, one might die."),
    new Character("Rodent","O","If 1 of your Townsfolk neighbours die, the other is drunk from now on, even if you are dead."),
    new Character("Sibyl","O","On your 1st day, privately learn a condition, day & consequence. If unmet by then, it happens, even if dead."),
    new Character("Turncoat","O","On your 1st night, choose another player. The 1st time one of you dies by execution, the other turns evil that night."),
    new Character("Winemaker","O","Your Townsfolk neighbours are drunk, but every other night, you are drunk until dusk, even if you are dead."),
    new Character("Worrywort","O","Public and private announcements might be false, even if you are dead."),
    new Character("Agent","M","On Night 1, look at the characters in the Grimoire. Minions mad about being other players' characters & those players might register as each other.",false,["Illusionist","Antipath","Songstress"]),
    new Character("Antipath","M","Each night*, you may choose a player: if the Demon, you die, otherwise, they die. If you'd die, you might not. You don't know other evil players, and they don't know you."),
    new Character("Augur","M","If a Townsfolk nominates you, they immediately become a Bad Omen."),
    new Character("Azure Robe","M","If you die by execution, each night*, choose a player: they die."),
    new Character("Bilge Rat","M","Outsiders poison Townsfolk they nominate until dawn. [Exactly 3 Outsiders]",true),
    new Character("Bogle","M","Each night*, if you were mad today about having an ability that kills at night, choose a player and a non-Demon character: they gain that character's ability.",false,["Cardinal","Deserter"]),
    new Character("Carpenter","M","If you die by execution, your nominator becomes evil & a not-in-play Minion tonight."),
    new Character("Chariot","M","Each night, choose 2 alive players (not yourself): if one is executed tomorrow, the other is instead."),
    new Character("Chessmaster","M","You start by choosing a player to poison. You know & have their ability. If they die, choose again.",false,["Cardinal","Deserter"]),
    new Character("Exiled","M","You start with an Outsider ability of your choice. [+1 or -1 Outsiders]",true,["An Owl","Cardinal","Deserter"]),
    new Character("Folly","M","1 Outsider knows you're in-play. Players who are mad an Outsider is an Outsider might be executed. [+0 or +1 Outsider]",true),
    new Character("Informant","M","Each night, choose a player: that player registers as the opposite alignment and as a character of that alignment tonight and tomorrow day."),
    new Character("Lepidopterist","M","While 4 or more players live, the first non-Townsfolk to be executed cannot die."),
    new Character("Lunger","M","You think you are a non-Minion & might die. The first Lunger to die becomes evil at night & learns an evil player. [+1 good Lunger, You are good]",true,["Hooligan"]),
    new Character("Propagandist","M","You start knowing a word or phrase; if it has been said at least 3 times publicly, someone might be executed when it is said (once)."),
    new Character("Queeg 500","M","Each night*, choose an alive player: a chosen evil player swaps characters with you."),
    new Character("Sea Spirit","M","On your 1st night, choose a good player: they are poisoned. If they live while only 3 players live, your team wins, even if you are dead. 1 good player knows a Sea Spirit is in play."),
    new Character("Sollos","M","The Demon & a good player (you know who) know they might register as each other's character. If the good player is executed, evil wins."),
    new Character("Songstress","M","You & a good player know of the other's character. If you guess them while they live (once), evil wins."),
    new Character("Sphinx","M","Each night, choose a player: tomorrow the Storyteller will publicly ask them a yes/no question & if they get it wrong they might be executed."),
    new Character("Survivalist","M","You have the ability of the most recent Townsfolk or other Minion to be killed by a player."),
    new Character("Temptress","M","On your 1st night choose two players: they learn that they were chosen. The 1st time one of them dies by execution, the other becomes evil that night."),
    new Character("Trader","M","You know a night & a Minion ability you have. On that night, your ability is replaced & 1 good player learns your old one.",false,["Lunger","Wendigo"]),
    new Character("Vampire","M","The 1st evil player nominated by evil today lives if executed. Townsfolk who nominate you poison you both until dawn."),
    new Character("Wendigo","M","You think you are a good character, but an evil player knows you are the Wendigo. Players you nominate or choose at night might die until dawn. [-1 Outsider]",true,["Hooligan"]),
    new Character("Wight","M","The 1st player you nominated while alive and voted for while dead are poisoned (even when dead)."),
    new Character("Wyvern","M","Each night*, a good player who voted for you today might die, even if you are dead."),
    new Character("Azgoat","D","Each night, you may choose 2 players: they die tomorrow night. The chosen player that is the most dishonest tomorrow might not die."),
    new Character("Bloodwrite","D","Each night, you may choose 2 players (they learn this): they die tomorrow night. Players who offer the most might not die."),
    new Character("Calypso","D","Each night, choose 3 players. The 1st player you chose last night dies. If that player was executed today, the other 2 players die tonight."),
    new Character("Dormaquino","D","Each night, choose 3 players: they receive false private announcements. Each night*, a player who was chosen the previous night dies."),
    new Character("Gi Yose","D","Once per game on night X, choose X players: they might die after the vote if nominated. All other nights*, a player dies."),
    new Character("Grue","D","Once per game on night X, choose X players (they learn this): if they fail to vote while alive they might be executed. All other nights*, a player dies."),
    new Character("Hannibal","D","You think you are a good character, but you are not. Minions learn 3 bluffs. Each night*, a player might die. The 1st Hannibal to die, becomes good. [+1 Hannibal]",true,["Illusionist"]),
    new Character("Hethaesta","D","Only you & 1 good player know what your ability is. If an evil player dies, it becomes, \"Each night*, choose a player: they die.\""),
    new Character("Hollow","D","Players might die. On your 2nd night, choose a player & a direction: they receive false information & this effect spreads to the next unaffected player in that direction every dusk."),
    new Character("Inysyns","D","You start knowing a day. On that day (from dawn to dusk) if good would win, evil wins instead. Each night*, choose a player: they die."),
    new Character("Ivyth","D","Each night*, choose a player: they die. If 5 or more players live, 1 good player learns when you die & a Minion becomes Ivyth."),
    new Character("Kraken","D","Each night*, choose a player: they die. The 1st time you kill an Outsider, 1 of their living good neighbors die too. [−1 or +1 Outsider]",true),
    new Character("Kukalpa","D","Each night*, even if dead, choose a player: they die. The 1st player (not yourself) to nominate you \"is the Demon\" instead of you.",false,["Illusionist"]),
    new Character("Moondweller","D","Each night*, choose a player: they die. Good players learn false information after learning about you."),
    new Character("Nocker","D","A player babysits Nocker & their ability is now: \"Each night*, choose a player: they die.\" If the babysitter is chosen at night another living evil player babysits. [+1 Minion]",true,["Bookbinder","Illusionist","Conjuror"]),
    new Character("Nol Sign","D","Each night, choose a player (they learn this): they are mad about receiving a different announcement or they might be executed; they die at night (not tonight)."),
    new Character("Nosos","D","Each night, choose a player: they become poisoned. Poisoned players might die. Outsiders you poison learn this."),
    new Character("Ouroboros","D","On your 2nd night, choose a player & a direction: they die & each subsequent night the next player in that direction you can kill dies. Minions also count as \"the Demon\". You keep your ability while dead."),
    new Character("Vox Natorum","D","Each night*, choose 2 players: 1 dies, the other might switch characters with you &  alignments with another player (once).  Minions might die."),
    new Character("Woehelm","D","Each night*, choose 2 players: if they vote, they die. If no one died today, non-Demons chosen at night die."),
    new Character("Yng","D","Each night*, choose a player: they die. If only 3 non-Traveller players live, you die if & only if your clockwise living neighbor is executed. 1 good player knows you're in play.")
  ];
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
  var choices = [];
  for(k=players;k--;k>0){
    choices.push(null);
  }
  
};
