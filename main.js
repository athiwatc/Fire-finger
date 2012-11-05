
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

var dic = ["a", "convenient", "hard", "official", "something",
"able", "convention", "has", "often", "sometimes",
"aboard", "convict", "hat", "old", "son",
"about", "copy", "have", "omit", "song",
"above", "cordially", "he", "on", "soon",
"absence", "cost", "head", "once", "sorry",
"accept", "could", "hear", "one", "south",
"accident", "country", "heard", "only", "speak",
"according", "course", "heart", "open", "special",
"account", "court", "height", "opinion", "spell",
"across", "cover", "held", "or", "spend",
"act", "crowd", "help", "order", "spent",
"action", "cut", "her", "organization", "spring",
"add", "dark", "here", "organize", "stamp",
"addition", "dash", "herself", "other", "stand",
"address", "date", "high", "ought", "start",
"adopt", "daughter", "him", "our", "state",
"affair", "day", "himself", "out", "statement",
"afraid", "dead", "his", "outside", "station",
"after", "deal", "history", "over", "stay",
"afternoon", "dear", "hold", "own", "steamer",
"again", "death", "home", "page", "still",
"against", "debate", "honor", "paid", "stole",
"age", "December", "hope", "pair", "stone",
"ago", "decide", "horse", "paper", "stood",
"agreement", "decision", "hot", "part", "stop",
"air", "declare", "hour", "particular", "stopped",
"alike", "deep", "house", "party", "story",
"all", "degree", "how", "pass", "street",
"allege", "delay", "however", "past", "struck",
"allow", "department", "human", "pay", "study",
"almost", "desire", "hurt", "people", "success",
"alone", "destroy", "husband", "perfect", "such",
"along", "develop", "I", "perhaps", "sudden",
"already", "diamond", "ice", "period", "suffer",
"also", "did", "if", "personal", "suggest",
"although", "died", "illustrate", "picture", "suit",
"always", "difference", "immediate", "piece", "summer",
"am", "different", "importance", "place", "summon",
"among", "difficulty", "important", "plan", "Sunday",
"amount", "direct", "impossible", "plant", "supply",
"an", "direction", "imprison", "play", "support",
"and", "director", "improvement", "pleasant", "suppose",
"annual", "disappoint", "in", "please", "sure",
"another", "discussion", "include", "pleasure", "surprise",
"answer", "distinguish", "income", "point", "system",
"any", "distribute", "increase", "police", "table",
"anything", "district", "indeed", "political", "take",
"anyway", "divide", "inform", "poor", "talk",
"appear", "do", "information", "popular", "tax",
"application", "doctor", "injure", "population", "teach",
"appoint", "does", "inside", "position", "teacher",
"appreciate", "dollar", "inspect", "possible", "tell",
"April", "don’t", "instead", "post", "ten",
"are", "done", "intend", "pound", "tenth",
"argument", "door", "interest", "power", "term",
"army", "doubt", "into", "practical", "terrible",
"around", "down", "investigate", "prefer", "testimony",
"arrange", "dozen", "invitation", "preliminary", "than",
"arrangement", "dress", "is", "prepare", "thank",
"arrest", "drill", "issue", "present", "that",
"arrive", "driven", "it", "president", "the",
"article", "drown", "its", "press", "theater",
"as", "due", "itself", "pretty", "their",
"ask", "during", "jail", "price", "them",
"assist", "duty", "January", "primary", "themselves",
"associate", "each", "judge", "principal", "then",
"association", "earliest", "judgment", "principle", "there",
"assure", "early", "July", "print", "therefore",
"at", "east", "June", "prison", "these",
"athletic", "easy", "just", "private", "they",
"attempt", "eat", "justice", "probably", "thing",
"attend", "education", "keep", "proceed", "think",
"attention", "effect", "kill", "progress", "third",
"August", "effort", "kind", "promise", "this",
"aunt", "eight", "knew", "prompt", "those",
"auto", "either", "know", "proper", "though",
"automobile", "elaborate", "known", "property", "thought",
"avenue", "elect", "lady", "prove", "three",
"await", "election", "lake", "provide", "through",
"away", "else", "land", "provision", "throw",
"awful", "emergency", "large", "public", "Thursday",
"baby", "empire", "last", "publication", "thus",
"back", "employ", "late", "publish", "ticket",
"bad", "enclose", "law", "purpose", "time",
"ball", "end", "lay", "push", "tire",
"band", "engage", "lead", "put", "to",
"be", "engine", "learn", "question", "today",
"bear", "enjoy", "least", "quite", "together",
"beautiful", "enough", "leave", "race", "told",
"became", "enter", "led", "railroad", "tomorrow",
"because", "entertain", "ledge", "rain", "tonight",
"become", "entire", "left", "raise", "too",
"bed", "entitle", "length", "ran", "took",
"been", "entrance", "less", "rapid", "top",
"before", "escape", "lesson", "rate", "total",
"beg", "especially", "let", "rather", "toward",
"began", "estate", "letter", "reach", "town",
"begin", "estimate", "liberty", "read", "track",
"beginning", "even", "life", "ready", "train",
"begun", "evening", "light", "real", "travel",
"behind", "event", "like", "really", "treasure",
"believe", "ever", "line", "reason", "tree",
"belong", "every", "list", "receipt", "trip",
"beside", "everything", "little", "receive", "trouble",
"best", "evidence", "live", "recent", "TRUE",
"better", "examination", "local", "recommend", "truly",
"between", "except", "long", "recover", "trust",
"big", "expect", "look", "red", "try",
"bill", "expense", "lose", "refer", "Tuesday",
"black", "experience", "loss", "reference", "turn",
"block", "express", "lost", "refuse", "two",
"blow", "extra", "lot", "regard", "unable",
"blue", "extreme", "love", "region", "uncle",
"board", "eye", "low", "relative", "under",
"boat", "face", "machine", "relief", "understand",
"body", "fact", "madam", "remain", "unfortunate",
"book", "factory", "made", "remember", "unless",
"born", "fail", "mail", "repair", "until",
"both", "fair", "majority", "reply", "up",
"bought", "fall", "make", "report", "upon",
"box", "family", "man", "represent", "us",
"boy", "famous", "manner", "request", "use",
"bridge", "far", "many", "respectfully", "usual",
"bring", "farther", "March", "responsible", "vacation",
"broke", "father", "marriage", "rest", "various",
"brother", "favor", "material", "restrain", "very",
"brought", "feature", "matter", "result", "vessel",
"build", "February", "may", "retire", "victim",
"built", "feel", "May", "return", "view",
"burn", "feet", "maybe", "ride", "visit",
"business", "fell", "mayor", "right", "visitor",
"busy", "felt", "me", "ring", "vote",
"but", "few", "mean", "river", "volume",
"buy", "field", "meant", "road", "wait",
"by", "fifth", "measure", "room", "walk",
"call", "fight", "meet", "round", "want",
"came", "figure", "member", "royal", "war",
"camp", "file", "men", "rule", "warm",
"can", "fill", "mention", "run", "was",
"cannot", "final", "mere", "running", "watch",
"capture", "finally", "might", "said", "water",
"car", "find", "mile", "sail", "way",
"card", "fine", "mind", "salary", "we",
"care", "finish", "mine", "same", "wear",
"career", "fire", "minute", "Saturday", "weather",
"carried", "firm", "Miss", "saw", "Wednesday",
"carry", "first", "miss", "say", "week",
"case", "five", "Monday", "says", "weigh",
"cast", "fix", "money", "scene", "well",
"catch", "flight", "month", "school", "went",
"cause", "folks", "more", "sea", "were",
"celebration", "follow", "morning", "search", "west",
"cent", "foot", "most", "second", "what",
"center", "for", "mother", "secretary", "when",
"century", "foreign", "motion", "section", "where",
"certain", "forenoon", "mountain", "subject", "whether",
"chain", "forget", "move", "secure", "which",
"change", "form", "Mr.", "see", "while",
"character", "fortune", "Mrs.", "seem", "who",
"charge", "forty", "much", "seen", "whole",
"check", "forward", "must", "select", "whom",
"chief", "found", "my", "senate", "whose",
"child", "four", "name", "send", "why",
"children", "fourth", "national", "sent", "wife",
"Christmas", "free", "navy", "separate", "will",
"church", "Friday", "near", "September", "wind",
"circular", "friend", "nearly", "serious", "winter",
"circumstance", "from", "necessary", "serve", "wire",
"cities", "front", "need", "service", "wish",
"citizen", "full", "neighbor", "session", "with",
"city", "further", "neither", "set", "within",
"claim", "game", "never", "seven", "without",
"class", "gave", "new", "several", "witness",
"clean", "general", "news", "shall", "women",
"clear", "gentleman", "newspaper", "she", "wonder",
"clerk", "get", "next", "shed", "wonderful",
"close", "getting", "nice", "ship", "word",
"clothing", "girl", "night", "short", "work",
"club", "give", "nine", "should", "world",
"cold", "glad", "no", "show", "worth",
"collect", "glass", "none", "shut", "would",
"colonies", "go", "noon", "sick", "wreck",
"combination", "God", "north", "side", "write",
"come", "goes", "not", "sight", "written",
"comfort", "gold", "nothing", "since", "wrote",
"coming", "gone", "November", "sincerely", "yard",
"command", "good", "now", "sir", "year",
"committee", "got", "number", "sister", "yes",
"common", "government", "o'clock", "sit", "yesterday",
"company", "grand", "object", "six", "yet",
"complaint", "grant", "objection", "size", "you",
"complete", "great", "oblige", "slide", "young",
"concern", "ground", "obtain", "slower", "your",
"condition", "guess", "occupy", "small", " ",
"conference", "guest", "October", "so", " ",
"connection", "had", "of", "soap", " ",
"consider", "half", "off", "soft", " ",
"consideration", "hand", "offer", "sold", " ",
"contain", "happen", "office", "some", " ",
"contract", "happy"]

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
	thisword = capitaliseFirstLetter(dic[Math.floor(Math.random() * dic.length)]);
    var word = new createjs.Text(thisword, "14px Segoe UI Italic", "#fff");
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

function capitaliseFirstLetter(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
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
    word.speed = Math.random() * 2;
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