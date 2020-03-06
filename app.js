/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
//// class 48 ////  class 48 /// class 48 /// class 48 ///

var scores, roundScore,activePlayer,gamePlaying,ami
init()
//dice=Math.floor(Math.random()*6)+1;
// dicemel number such as(2.3333) to integer number such as(2)
// Math.floor(2.33)
//console.log(dice)
// Its called setter ////
//document.querySelector('#current-'+activePlayer).textContent=dice;
//document.querySelector('#current-'+activePlayer).innerHTML='<em>' + dice + '</em>';
// how to only red html element by store it in a variable ///
/// Its called Getter ///
//var x =document.querySelector('#current-1').textContent;
//console.log(x);



//// class 49 /// class 49 /// class 49 /// 

/// Event handeler ,call beack function ,anymous event ////
//function roll(){
    // Do something here
//}
//roll()


document.querySelector('.btn-roll').
addEventListener('click', function(){
    if (gamePlaying){
       // Do something Here 
    // Random Number ///
   var dice = Math.floor(Math.random()*6)+1;
   // Display the result ///
   var diceDOM = document.querySelector('.dice');
  diceDOM.style.display='block';
  diceDOM.src = 'dice-' + dice + '.png';

  if (dice !== 1){
      // do something here ///

      // After each roll dice current will be sum with previous current result
      roundScore = roundScore + dice;
      document.querySelector('#current-' + activePlayer).textContent= roundScore;


  }
  else { nextPlayer()

  }
}});
    
    

document.querySelector('.btn-hold').addEventListener('click',function(){
    if (gamePlaying){
        // Add corrent score to GLOOBAl score ///
    scores[activePlayer] += roundScore;
    /// Update UI ///
    document.querySelector('#score-'+ activePlayer).textContent=scores[activePlayer];}

     // Cheak If one won the game ///
if (scores[activePlayer] >= 100){
    document.querySelector('#name-'+ activePlayer).textContent='Winner !';
    document.querySelector('.player-'+ activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-'+ activePlayer + '-panel').classList.remove('active');
    gamePlaying =false;
}
else{
   nextPlayer()
  
}

})
    
    
    
    
   


   
function nextPlayer(){
    activePlayer === 0 ? activePlayer=1:activePlayer=0
    roundScore= 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.player-0-panel').classList.toggle ('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    document.querySelector('.dice').style.display='none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init (){
    scores=[0,0];
roundScore=0;
activePlayer=0;
gamePlaying = true;
 //ami = true;

document.getElementById ('score-0').textContent='0';
document.getElementById ('score-1').textContent='0';
document.getElementById ('current-0').textContent='0';
document.getElementById ('current-1').textContent='0';
// change css by using javaScript ///

document.querySelector('.dice').style.display='none';
document.getElementById('name-0').textContent='Player-1'
document.getElementById('name-1').textContent='Player-2'
//document.querySelector('.player-0-panel').classList.remove ('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');
    
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
}

// My question About lastFininsing lacture (state Varaible) //
  // we decleared a var nemed gamePlaying in global scope . And we assigned the value of this var as 'true' in a function . After I decleread this fuction I write a fuction under this and i decleared this value in a if statement like 'if (gamePlaying)'.My question is how it is going to be possible that this var is taking the value is assigened in a function . Because this value is assigned in local scope and if statement is global scope .So how is going to be access from local scope to global scope ? 


  // ANSAWER if you declered any var globaly you wiil have access in all place. The value of var is executed line by line .So when you have assinged the value of gamePlaying in function that is called abobe your if statement , the gamePlaying decleared in if is assinged the exesting value. Becaues execution context is proccesed line by line .Incase you decleared the fuction under if statement , it will no be assinged the true value with gamePlaying in if statement. Creation phares and execution context are fully defferent things. The var declearation works with creation pharese .So you can not decleare any var anywhere .you can only decleared the var you have scope there. value assinged works with execuciton context. It works line by line . OK does it make sence?



// QUESTION
  //  has 'Every if condition' accese on all  local scope (like function) and global scope?

// ANSwER
 // No If conditon has only accesse on global scope . So you can not decleared the var is decleared in function that is local scope Except of lexical scoping. you can decleard if you have lexical scoping like others.


// QUESTION
  // if i decleared a var in if statement , can i use  this  var as global scope ? i mean that the  var we decleared in if statement is it assigned as global or local scope ?

  // ANSWERE

  // YES if you decleared a var in if statement you will have acces in all places like global scope. OK dooese it make senece?

  // QUESTION
  // Where has function aggument accese on ?

  // ANSWERE 

  // function agument has only accesse on his scope .So you can not decleared any functin's argument in global scope or other local scope except its scope.
  //But if you declearde a function in other function and pass the argument has acces on  this function you decleared in , thate is right you have accese on it.

  // NOTE ABOUT EXECUTION CONTEXT ///
  // we know that execution context is proccesed line by line. So when you decleared a value assingened in function you decleared  under this  , this value is assigned with the same  value is assinged in decleared function. 
  
  















































