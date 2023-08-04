


var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];

var userClickedColours  = [];

var started = false;

var level = 0;




$(document).keypress(function(){

    if (started === false) {

        nextSequence();
        $("h1").text("Level " + level);
        started = true;

    }

})



$(".btn").click(function(event){

    var buttonClicked = event.target.id;
    userClickedColours.push(buttonClicked);


    $("#" + buttonClicked).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound (buttonClicked);
    checkAnswer ();

})




function checkAnswer () {

    if (gamePattern[userClickedColours.length - 1] === userClickedColours[userClickedColours.length - 1]) {

        if (gamePattern.length === userClickedColours.length) {

            console.log ("Success");
            console.log(userClickedColours.length - 1);
            console.log(userClickedColours.length);
            nextSequence();

        }   
    
    
    } else {

        console.log("Wrong");

        var wrong = "wrong";

        playSound (wrong);
        $("body").addClass("game-over");
        setTimeout(function(){$("body").removeClass("game-over")}, 200);
        $("h1").text("Click Any Button to Restart the Game");

        startOver();

    }

}



function startOver() {

    gamePattern = [];
    userClickedColours = [];
    started = false;
    level = 0;

}







function nextSequence() {

    userClickedColours = [];

    level ++;

    $("h1").text("Level " + level);

    var randomNumber = Math.floor(Math.random()*4);

    var randomChosenColour = buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeOut(100).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound (randomChosenColour);

}




function playSound (name) {

    var soundEffect = new Audio ("sounds/" + name + ".mp3");

    soundEffect.play();

}












