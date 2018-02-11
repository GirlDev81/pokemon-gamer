/// DATABASE ///
var pokemonDB = [
  {
  name: 'charmander',
  type: 'fire',
  attack: 32,
  stamina: 43,
  level: 1,
  img:'http://www.smogon.com/dex/media/sprites/xy/charmander.gif'
  },

  {
  name: 'bulbasaur',
  type: 'fire',
  attack: 45,
  stamina: 47,
  level: 1,
  img:'http://www.smogon.com/dex/media/sprites/xy/bulbasaur.gif'
  },

  {
  name: 'squirtle',
  type: 'water',
  attack: 44,
  stamina: 48,
  level: 1,
  img:'http://www.smogon.com/dex/media/sprites/xy/squirtle.gif'
  }
]

/// STATE ///

var gameState = {
 userPokemon: '',
 rivalPokemon: ''
}

console.log(gameState);

/// ELEMENTS ///

var pokemonsEl = document.querySelector('.select-screen').querySelectorAll('.character');
console.log(pokemonsEl)

var battleScreenEl = document.getElementById('battle-screen')

var i = 0;

/// INITIAL LOOP ///

while (i < pokemonsEl.length) {

/// ADD FUNCTION ON ALL CHARACTERS ON SCREEN SELECT ////
 pokemonsEl[i].onclick = function () {
/// CURRENT SELECTED POKEMONS NAME ///
   var pokemonName = this.dataset.pokemon
/// ELEMENTS FOR IMAGES ON BATTLE SCREEN ////
   var player1Img = document.querySelector('.player1').getElementsByTagName('img')
   var player2Img = document.querySelector('.player2').getElementsByTagName('img')
/// SAVE CURRENT POKEMON ///
   gameState.userPokemon = pokemonName;
/// CPU PICKS A POKEMON ///
   cpuPick()
/// CHANGE TO BATTLESCREEN ///
   battleScreenEl.classList.toggle('active')
/// CURRENT USER POKEMON ////
   var currentPokemon = pokemonDB.filter(function(pokemon){
     return pokemon.name == gameState.userPokemon
   })
   player1Img[0].src = currentPokemon[0].img
/// CURRENT CPU POKEMON ///
   var currentRivalPokemon = pokemonDB.filter(function(pokemon){
     return pokemon.name == gameState.rivalPokemon
   })
   player2Img[0].src = currentRivalPokemon[0].img

/// USER CHOOSE ATTACK ///


/// CPU HEALTH GOES DOWN ///



/// CPU ATTACK ///



/// USER HEALTH GOES DOWN ///



/// ROCK > SCISSORS ///


/// PAPER > ROCK ///


/// SCISSORS > PAPER ///


/// POKEMON TYPE AND DEFENSE ATTACK ON HEALTH ///



/// HEALTH EQUALS <=0 LOSES ///
 }
 i++;
}

var a = 0
while(a < attackBtnsEl.length){
  attackBtnsEl[a].onclick = function(){
  var attackName = this.dataset.attack
  gameState.currentUserAttack = attackName
  play(attackName, 'scissors')
  }
  a++
}

 var play = function(userAttack, cpuAttack){
   switch(userAttack) {
    case 'rock':
    if(cpuAttack == 'paper'){
      console.log('Paper killed rock')
    }
    if(cpuAttack == 'scissors'){
      console.log('Rock killed paper')
    }
    if(cpuAttack == 'Rock'){
      console.log('Its a draw')
    }
        break;
    case 'paper':
        console.log('userAttack')
        break;
    case 'scissors':
        console.log('userAttack')
        break;
}
}

 var randomNumber = function(min, max){
   return Math.floor(Math.random() * (max - min)) + min;
 }

 var cpuPick = function(){
   gameState.rivalPokemon = pokemonsEl[randomNumber(0, 3)].dataset.pokemon
 }
