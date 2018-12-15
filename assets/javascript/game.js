alert('\n\t\t\t\tWave your wand to start game!\n\n\t\t\t(Really just move your cursor and click OK)\n\n\tRead the instructions on the left before typing your next key.'

)
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
var answerArray = ['bellatrix', 'dumbledore', 'gryffindor', 'harry', 'hermione', 'hippogriff', 'hogwarts', 'hufflepuff', 'mcgonagall', 'patronus', 'phoenix', 'quidditch', 'ravenclaw', 'ron', 'slytherin', 'snape', 'sortinghat', 'umbridge', 'voldemort', 'wand']
var correctGuess = []
var incorrectGuess = []
var underscores = []
var userGuess = []
var lives = 7
var alreadyGuessed = []
var wins = []
var losses = []
var answerToBeGuessed = [] //word being guessed
var answer = [Math.floor(Math.random() * answerArray.length)];

//Start of game
function start() {

    correctGuess = [];
    incorrectGuess = [];
    underscores = [];
    lives = 7;

    for (var i = 0; i < answer.length; i++) {
        answerArray[i] = "_";
    }
    //Random word
    answerToBeGuessed = answerArray[Math.floor(Math.random() * answerArray.length)];
    console.log(answerToBeGuessed)

    for (var i = 0; i < answerToBeGuessed.length; i++) {
        underscores.push('_ ');
    }
}
console.log(underscores)

//Keystroke
document.onkeyup = function (event) {
    userGuess = event.key

    if (answerToBeGuessed.indexOf(userGuess) > -1) {

        for (var i = 0; i < answerToBeGuessed.length; i++) {
            if (answerToBeGuessed[i] === userGuess) {
                underscores[i] = userGuess;
            }
        };

        if (underscores.join('') == answerToBeGuessed) {
            wins++;

            if (answerToBeGuessed = "dumbledore") {
                document.getElementById('text-area').src = "assets/images/dumbledore.jpg";
                document.getElementById('answer-title').innerHTML = "Dumbledore";
            }
            else if (answerToBeGuessed = "gryffindor") {
                document.getElementById('text-area').src = "assets/images/gryffindor.jpg";
                document.getElementById('answer-title').innerHTML = "Gryffindor";
            }
            else if (answerToBeGuessed = "harry") {
                document.getElementById('text-area').src = "assets/images/harry.jpg";
                document.getElementById('answer-title').innerHTML = "Harry";
            }
            else if (answerToBeGuessed = "hermione") {
                document.getElementById('text-area').src = "assets/images/hermione.jpg";
                document.getElementById('answer-title').innerHTML = "Hermione";
            }
            else if (answerToBeGuessed = "hippogriff") {
                document.getElementById('text-area').src = "assets/images/hippogriff.jpg";
                document.getElementById('answer-title').innerHTML = "Hippogriff";
            }
            else if (answerToBeGuessed = "hogwarts") {
                document.getElementById('text-area').src = "assets/images/hogwarts.jpg";
                document.getElementById('answer-title').innerHTML = "Hogwarts";
            }
            else if (answerToBeGuessed = "hufflepuff") {
                document.getElementById('text-area').src = "assets/images/hufflepuff.jpg";
                document.getElementById('answer-title').innerHTML = "Hufflepuff";
            }
            else if (answerToBeGuessed = "mcgonagall") {
                document.getElementById('text-area').src = "assets/images/mcgonagall.jpg";
                document.getElementById('answer-title').innerHTML = "McGonagall";
            }
            else if (answerToBeGuessed = "patronus") {
                document.getElementById('text-area').src = "assets/images/patronus.jpg";
                document.getElementById('answer-title').innerHTML = "Patronus";
            }
            else if (answerToBeGuessed = "phoenix") {
                document.getElementById('text-area').src = "assets/images/phoenix.jpg";
                document.getElementById('answer-title').innerHTML = "Phoenix";
            }
            else if (answerToBeGuessed = "quidditch") {
                document.getElementById('text-area').src = "assets/images/quidditch.jpg";
                document.getElementById('answer-title').innerHTML = "Quidditch";
            }
            else if (answerToBeGuessed = "ravenclaw") {
                document.getElementById('text-area').src = "assets/images/ravenclaw.jpg";
                document.getElementById('answer-title').innerHTML = "Ravenclaw";
            }
            else if (answerToBeGuessed = "ron") {
                document.getElementById('text-area').src = "assets/images/ron.jpg";
                document.getElementById('answer-title').innerHTML = "Ron";
            }
            else if (answerToBeGuessed = "slytherin") {
                document.getElementById('text-area').src = "assets/images/slytherin.jpg";
                document.getElementById('answer-title').innerHTML = "Slytherin";
            }
            else if (answerToBeGuessed = "snape") {
                document.getElementById('text-area').src = "assets/images/snape.jpg";
                document.getElementById('answer-title').innerHTML = "Snape";
            }
            else if (answerToBeGuessed = "sortinghat") {
                document.getElementById('text-area').src = "assets/images/sortinghat.jpg";
                document.getElementById('answer-title').innerHTML = "Sorting Hat";
            }
            else if (answerToBeGuessed = "umbridge") {
                document.getElementById('text-area').src = "assets/images/umbridge.jpg";
                document.getElementById('answer-title').innerHTML = "Umbridge";
            }
            else if (answerToBeGuessed = "voldemort") {
                document.getElementById('text-area').src = "assets/images/voldemort.jpg";
                document.getElementById('answer-title').innerHTML = "Voldemort";
            }
            else if (answerToBeGuessed = "wand") {
                document.getElementById('text-area').src = "assets/images/wand.jpg";
                document.getElementById('answer-title').innerHTML = "Wand";
            }
            else if (answerToBeGuessed = "bellatrix") {
                document.getElementById('text-area').src = "assets/images/bellatrix.jpg";
                document.getElementById('answer-title').innerHTML = "Bellatrix";
            };
                start();
        }

        } else {
            if (incorrectGuess.includes(userGuess)) {
                //ignore keystroke and don't subtract from guesses remaining
            }
            else {
                incorrectGuess.push(userGuess);
                lives--;
                if (guessesRemaining == 0) {
                    losses++;
                    start();
                }
            }
        }


        document.getElementById("main-word").innerHTML = underscores.join(' ');
        document.getElementById("guesses-remaining").innerHTML = lives;
        document.getElementById("letters-used").innerHTML = incorrectGuess.join(', ');
        document.getElementById("wins").innerHTML = 'Wins: ' + wins;
        document.getElementById("losses").innerHTML = 'Losses: ' + losses;
    };

    start()
    console.log(start())

