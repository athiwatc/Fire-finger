/* Stage */
var canvas; // Canvas reference
var stage; // Stage reference

/* Text Field */
var gameText; // Game TextField
var descriptionText; // Game description TextField
var singlePlayText; // Single player TextField
var multiPlayText; // Multi player TextFiled
var creditText; // Credit TextField
var scoreText; // Score TextField
var hpText; // HP TextField
var overText; // Game Over TextField
var developerText; // Developer TextField
var playerText; // Player input TextField

String.prototype.trim=function(){return this.replace(/^\s\s*/, '').replace(/\s\s*$/, '');}

/* Word list */
var wordList;

/* Container */
var wordContainer; // Word container

/* Image */
var bg; // Background
var bgSrc; // Background source

/* Playing state */
var isStart;
var isOver;

/* Current word */
var current_word;

/* Click state*/
var click;

/* Player status */
var score;
var hp;

// Combo
var combo = 0;

/* Frame Counter */
var create_counter; // Frame counter for generate word
var check_counter; // Frame counter for check word correctness

/* Constant */
var ONE_SECOND = 30;

// Mouse up event
function onMouseUp(e) {
    click = false;
}

// Mouse down event
function onMouseDown(e) {
    click = true;
}

// Typing event
function onTyping(e) {
    // If user type alphabet appent to  playerText
    if (isAlphabet(String.fromCharCode(e.charCode))) {

        // If first character, make it to uppercase
        if (playerText.text.length == 0) {
            playerText.text += String.fromCharCode(e.charCode).toUpperCase();
        } else {
            playerText.text += String.fromCharCode(e.charCode);
        }
    }
}

function isAlphabet(c) {
    return /^[a-zA-Z()]$/.test(c);
}

function startWith(str, pattern) {
    return pattern == str.substr(0, pattern.length);
}

// Create TextField
function createText() {

    // Create All TextField
    gameText = new createjs.Text("Fire Finger", "36px Segoe UI Bold Italic", "#fff");
    descriptionText = new createjs.Text("Type to play!!!", "14px Segoe UI Italic", "#fff");
    singlePlayText = new createjs.Text("Single Player", "18px Segoe UI Italic", "#fff");
    multiPlayText = new createjs.Text("Multi Player", "18px Segoe UI Italic", "#fff");
    creditText = new createjs.Text("Credit", "18px Segoe UI Italic", "#fff");
    scoreText = new createjs.Text("Score : " + score, "16px Segoe UI Italic", "#fff");
    hpText = new createjs.Text("HP : " + hp, "16px Segoe UI Italic", "#fff");
    overText = new createjs.Text("Game Over", "30px Segoe UI Italic", "#fff");
    developerText = new createjs.Text("Develop by Spark Studio", "14px Segoe UI Italic", "#fff")
    playerText = new createjs.Text("", "18px Segoe UI Italic", "#fff");

    /*Set TextField Position*/
    gameText.textAlign = "center";
    gameText.x = canvas.width / 2;
    gameText.y = 150;
    descriptionText.textAlign = "center";
    descriptionText.x = canvas.width / 2;
    descriptionText.y = 210;
    singlePlayText.textAlign = "center";
    singlePlayText.x = canvas.width / 2;
    singlePlayText.y = 270;
    singlePlayText.name = "single";
    multiPlayText.textAlign = "center";
    multiPlayText.x = canvas.width / 2;
    multiPlayText.y = 300;
    multiPlayText.name = "multi";
    creditText.textAlign = "center";
    creditText.x = canvas.width / 2;
    creditText.y = 330;
    creditText.name = "credit";
    scoreText.textAlign = "center";
    scoreText.x = canvas.width - 50;
    scoreText.y = canvas.height - 25;
    hpText.textAlign = "center";
    hpText.x = 40;
    hpText.y = canvas.height - 25;
    overText.textAlign = "center";
    overText.x = canvas.width / 2;
    overText.y = canvas.height / 3 + 60;
    developerText.textAlign = "center";
    developerText.x = canvas.width / 2;
    developerText.y = canvas.height - 25;
    playerText.textAlign = "center";
    playerText.x = canvas.width / 2;
    playerText.y = canvas.height - 70;
}

// Remove menu from stage
function removeMenu() {
    stage.removeChild(gameText, descriptionText, singlePlayText, multiPlayText, creditText, developerText);
}

// Add menu to stage
function addMenu() {
    stage.addChild(gameText, descriptionText, singlePlayText, multiPlayText, creditText, developerText);
}

// Load background image
function loadBackground(e) {
    bg = new createjs.Bitmap(bgSrc);
    stage.addChild(bg);
    stage.update();
}

// Display Game Over
function gameOver() {
    stage.removeChild(wordContainer);
    stage.addChild(overText);
}

// Remove Game Over
function gameOverRemove() {
    stage.removeChild(overText);
}

function capitaliseFirstLetter(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}


function isClick(text) {
	var mouseTarget = stage.getObjectUnderPoint(stage.mouseX, stage.mouseY);
    var targetName = String(mouseTarget.name);
    return (targetName != null && targetName == text && click)
}

// Update canvas
function tick() {
    //The game is over.
    /*if (isOver && click) {
        gameOverRemove();
        isOver = false;
        isStart = false;
    }*/
    if (!isStart) {
        addMenu();
        if (isClick("single")) {
        	stage.addChild(scoreText);
            stage.addChild(hpText)
            stage.addChild(playerText);
        	isStart = true
        }
    } else {
        removeMenu(); // Remove menu
        // If game over, display Game Over TextField
        if (+hp <= 0) {
            isOver = true;
            gameOver();
        } // If game is not over, create and move word
        else if (!isOver) {
            create_counter++;
            // Create word every 5 seconds
            if (create_counter >=  (ONE_SECOND * 3) / Math.pow(2, score/1000)) {
                create_counter = 0;
                createWord();
            }
            moveWord(); // Move word
            var matched = highlightWord();
            if (!matched && playerText.text.length != 0) {
            	combo = 0;
                //Type in the next alphabet that you miss automatically
            	playerText.text = capitaliseFirstLetter(playerText.text.substr(-1));
                //Check again if the next alphanet is valid
                matched = highlightWord();
                if (!matched)
                    playerText.text = "";
            }

            current_word = getCurrentWord();
            if (current_word != -1 && current_word == getCurrentWord()) {
                score += 10 * wordList[current_word].text.length * wordList[current_word].y/1000;
                scoreText.text = "Score : " + Math.round(score);
                hp += Math.round(Math.log(combo+1));
                hpText.text = "HP : " + Math.max(0,Math.round(hp));
                wordContainer.removeChild(wordList[current_word]);
                wordList.splice(current_word, 1);
                playerText.text = "";
                combo += 2 * (combo + 1);
        	}
        }
    }

    // update stage
    stage.update();
}

// Initial function
function init() {

    canvas = document.getElementById("canvas"); // Reference to canvas
    stage = new createjs.Stage(canvas); // Create stage

    // Mouse event
    canvas.onmouseup = onMouseUp;
    canvas.onmousedown = onMouseDown;

    // Keyboard event
    document.onkeypress = onTyping;

    stage.mouseEventsEnabled = true; // Enabled mouse event

    // Load background image
    bgSrc = new Image();
    bgSrc.src = "img/bg.png";
    bgSrc.onload = loadBackground;

    /* Initial Variable */
    hp = 100;
    score = 0;
    create_counter = 0;
    check_counter = 0;
    current_word = -1;

    /* Initial State */
    isStart = false;
    isOver = false;
    click = false;

    // Create TextField
    createText();

    // Create word container
    wordContainer = new createjs.Container();

    // Init word list
    wordList = new Array();

    // Init frame rate and timer
    createjs.Ticker.setFPS(60);
    createjs.Ticker.addListener(window);

}