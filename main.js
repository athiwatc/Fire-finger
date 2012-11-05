
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

/* Frame Counter */
var create_counter; // Frame counter for generate word
var check_counter; // Frame counter for check word correctness

/* Constant */
var ONE_SECOND = 30;

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

    } else if (e.keyCode == 32) {
        // If not a last character,remove the last character
        if (playerText.text.length > 1) {
            playerText.text = playerText.text.substring(0, playerText.text.length - 1)
        }
        // If last character, clear to empty string
        else {
            playerText.text = "";
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

// Create words
function createWord() {
    var word = new createjs.Text("Word", "14px Segoe UI Italic", "#fff");
    wordList.push(word);
    randomPosition(word);
    wordContainer.addChild(word);
    stage.addChild(wordContainer);
}

// Display Game Over
function gameOver() {
    stage.removeChild(wordContainer);
    stage.addChild(overText);
}

// Move words
function moveWord() {
    // Index of word that out of canvas
    var outside_index = [];
    // Loop through all word
    for (var i = 0; i < wordList.length; i++) {
        var word = wordList[i];
        word.y += word.speed; // Move word along Y axis
        // If word reach the ground deduct player HP
        if (word.y > playerText.y - 20) {
            outside_index.push(i); // Store index of word that go out
            wordContainer.removeChild(word);
            hp -= Math.round(word.y/100); // Minus player hp
            hpText.text = "HP : " + hp;
        }
    }

    // Remove all word that go out
    for (var i = 0; i < outside_index.length; i++) {
        wordList.splice(outside_index[i], 1);
    }
}

// Highlight current typing word
function highlightWord() {

    var match = false;

    // Loop through all word in screen
    for (var i = 0; i < wordList.length; i++) {
        var word = wordList[i];
        // If any word start with text that user input, highlight it
        if (!match && playerText.text.length > 0 && startWith(word.text, playerText.text)) {
            word.color = "#0f0";
            match = true;
        }
        // Any word that doesn't math with user input, Make it white
        else {
            word.color = "#fff";
        }
    }

    return match;
}

function getCurrentWord() {
    // Loop through all word in screen
    for (var i = 0; i < wordList.length; i++) {
        var word = wordList[i];
        // If fount the mathching word return index
        if (word.text == playerText.text) return i;
    }
    return -1; // Not found the matching word return -1
}

// Set word position
function randomPosition(word) {
    word.x = Math.random() * (canvas.width - 50);
    word.y = -10;
    word.speed = Math.random() * 10;
}

function isClick(text) {
	var mouseTarget = stage.getObjectUnderPoint(stage.mouseX, stage.mouseY);
    var targetName = String(mouseTarget.name);
    return (targetName != null && targetName == text && click)
}

// Update canvas
function tick() {
    if (!isStart) {
        addMenu();
        if (isClick("single"))
        	isStart = true
    } else {
        removeMenu(); // Remove menu
        // If game over, display Game Over TextField
        if (+hp <= 0) {
            isOver = true;
            gameOver();
        } // If game is not over, create and move word
        else if (!isOver) {
            stage.addChild(scoreText);
            stage.addChild(hpText)
            stage.addChild(playerText);
            create_counter++;
            // Create word every 2 seconds
            if (create_counter == ONE_SECOND) {
                create_counter = 0;
                createWord();
            }
            moveWord(); // Move word
            var matched = highlightWord();
            if (!matched)
            	playerText.text = "";

            if (current_word == -1) {
                current_word = getCurrentWord();
            } else if (current_word == getCurrentWord()) {
                check_counter++;
                if (check_counter > 7) {
                    score += 10;
                    scoreText.text = "Score : " + score;
                    wordContainer.removeChild(wordList[current_word]);
                    wordList.splice(current_word, 1);
                    playerText.text = "";
                }
            } else {
                check_counter = 0;
            }
        }
    }

    // update stage
    stage.update();
}