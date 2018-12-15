alert('\n\t\t\t\tWave your wand to start game!\n\n\t\t\t(Really just move your cursor and click OK)\n\n\tRead the instructions on the left before typing your next key.'

)
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var answerArray = ['bellatrix', 'dumbledore', 'gryffindor', 'harry', 'hermione', 'hippogriff', 'hogwarts', 'hufflepuff', 'mcgonagall', 'patronus', 'phoenix', 'quidditch', 'ravenclaw', 'ron', 'slytherin', 'snape', 'sortinghat', 'umbridge', 'voldemort', 'wand']
var correctGuess = []
var incorrectGuess = []
var underscores = []
var userGuess = []
var remainingGuesses = []
var alreadyGuessed = [] 
var wins = [] 
var losses = [] 
var mainWord = [] //word being guessed
var answer = [Math.floor(Math.random() * answerArray.length)];

//Start of game
function start() {
    
    correctGuess = [];
    incorrectGuess = [];
    underscores = [];
    remainingGuesses = 7;
    
    for (var i = 0; i < answer.length; i++) {
        answerArray[i] = "_";
    }
    //Random word is chosen
    mainWord = answerArray[Math.floor(Math.random() * answerArray.length)];
    console.log(mainWord)

    for (var i = 0; i < mainWord.length; i++) {
    underscores.push('_ ');
    }
}
console.log(underscores)

document.onkeyup = function (event) {
    userGuess = event.key

    if (mainWord.indexOf(userGuess) > -1) {

        for ( var i = 0; i < mainWord.length; i++) {
            if (currentWord[i] === userGuess) {
                underscores[i] = userGuess;
            }
        }
    }


    document.getElementById("main-word").innerHTML = underscores.join(' ');

};

start();

