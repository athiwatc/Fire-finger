// Create words
function createWord() {
	thisword = capitaliseFirstLetter(dic[Math.floor(Math.random() * dic.length)]).trim();
    var word = new createjs.Text(thisword, "14px Segoe UI Italic", "#fff");
    wordList.push(word);
    randomPosition(word);
    wordContainer.addChild(word);
    stage.addChild(wordContainer);
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
        if (playerText.text.length > 0 && startWith(word.text, playerText.text)) {
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
    word.speed = Math.random() * (1+score/1000);
}