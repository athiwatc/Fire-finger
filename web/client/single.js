function Single(){

    // Player state
    this.hp = 100;
    this.score = 0;

    // Game state
    this.isInit = true;
    this.isOver = false;
    this.isStart = false;

    // Word
    var wordList;

}

// Initial object
Single.prototype.init = function(){
    this.init = true;

}

// Start the game
Single.prototype.start = function(){
    this.isStart = true;
}

// Is the game over
Single.prototype.isOver = function(){
    return false;
}