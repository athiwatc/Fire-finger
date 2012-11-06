window.onload = function () {
    var width = 760;
    var height = 640;

    //create the canvas
    Crafty.init(width, height);
    Crafty.canvas.init();

    //Fix the text format
    Crafty.c("TextFormat", {
        init: function () {
            this._textFont = {
                "type": "",
                    "weight": "",
                    "size": "",
                    "family": ""
            }
        }
    });

    //Set the background color
    Crafty.background('rgb(127,127,127)');

    //The start scene
    Crafty.scene("Start", function () {

        //The background image
        Crafty.e("2D,DOM,Text,Image")
            .image('img/menu.png')
            .attr({
            x: 0,
            y: 0,
            w: width,
            h: height
        });

        //Single player text
        Crafty.e("Single,2D,DOM,Text,TextFormat,Mouse")
            .text("Single Player")
            .textColor("#ffffff")
            .textFont({
            size: "32px",
            family: "nt",
            type: "Bold"
        })
            .attr({
            x: 77,
            y: 259,
            w: 368,
            h: 100
        })
            .css('text-align', 'center')
            .bind("Click", function () {
            Crafty.scene("Single");
        });

        //Multiplayer text
        Crafty.e("Multi,2D,DOM,Text,TextFormat")
            .text("Multi Player")
            .textColor("#ffffff")
            .textFont({
            size: "32px",
            family: "nt",
            type: "Bold"
        })
            .attr({
            x: 77,
            y: 337,
            w: 368
        })
            .css('text-align', 'center');

        //Credit text
        Crafty.e("Single,2D,DOM,Text,TextFormat")
            .text("Credit")
            .textColor("#ffffff")
            .textFont({
            size: "32px",
            family: "nt",
            type: "Bold"
        })
            .attr({
            x: 77,
            y: 491,
            w: 368
        })
            .css('text-align', 'center');

        //Developed by who text
        Crafty.e("Developed,2D,DOM,Text,TextFormat")
            .text("Developed by Spart Studio")
            .textColor("#ffffff")
            .textFont({
                size: "14px",
                family: "Segoe UI",
                type: "Italic"
            })
            .attr({
                x: 0,
                y: 620,
                w: width
            })
            .css('text-align', 'center');
    });

    //The single player seen
    Crafty.scene("Single", function () {
        
        //Get the current FPS
        var FPS = +Crafty.timer.getFPS();
        //Set the base line that the word will start to disappear
        var baseLine = 545;
        Crafty.e("2D,DOM,Text,Image")
            .image('img/baseline_white.png')
            .attr({
            x: 230,
            y: 530,
            w: width,
            h: height
        });
        //The current text of the play, current text that was typed.
        var player_text = "";

        //The background
        Crafty.e("2D,DOM,Text,Image")
            .image('img/single.png')
            .attr({
            x: 0,
            y: 0,
            w: width,
            h: height
        });
        
        //The current player text
        Crafty.e("Player,2D,DOM,Text,TextFormat")
            .text(player_text)
            .textColor("#ffffff")
            .textFont({
                size: "16px",
                family: "Segoe UI"
            })
            .attr({
                x: 0,
                y: 570,
                w: width
            })
            .css('text-align', 'center')
            .bind("KeyDown",function(e){
                    
                    function isAlphabet(c){
                        return /^[a-zA-Z()]$/.test(c);
                    }
                    
                    function startWith(str,pattern){
                        return pattern == str.substr(0, pattern.length);
                    }
                
                    if( isAlphabet(String.fromCharCode(e.key)) ){
                        if( player_text.length == 0 )
                            player_text += String.fromCharCode(e.key).toUpperCase();
                        else
                            player_text += String.fromCharCode(e.key).toLowerCase();
                    }
                    
                    Crafty("Words").each(function(){
                            if( player_text == this.text() ){
                                this.textColor("green");
                                player_text = "";
                            }
                        })
                        
                    var match = false;
                    Crafty("Words").each(function(){
                            if( startWith(this.text(),player_text) ){
                                match = true;
                            }else if( startWith(this.text(),String.fromCharCode(e.key).toUpperCase()) ){
                                match = true;
                                player_text = String.fromCharCode(e.key).toUpperCase();
                            }
                        })
                    if( !match ) player_text = "";
                    
                    Crafty("Player").each(function(){
                            this.text(player_text);
                        })
                });

        Crafty.e()
            .bind("EnterFrame", function () {
                
                function startWith(str,pattern){
                        return pattern == str.substr(0, pattern.length);
                    }
                
                if (Crafty.frame() % (2 * FPS) == 0) {
                    Crafty.e("Words,2D,DOM,Text,TextFormat")
                        .text(function() {
                            return dic[Math.floor(Math.random() * dic.length)].replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
                        })
                        .textColor("#ffffff")
                        .textFont({
                            size: "16px",
                            family: "Segoe UI"
                        })
                        .attr({
                            x: Crafty.math.randomInt(229, 520),
                            y: 29
                        })
                        .bind("EnterFrame", function () {
                            this.y += 1;
                            if (this.y == baseLine) {
                                this.destroy();
                            }
                        });
                    }
                    
                Crafty("Words").each(function(){
                    if( player_text.length > 0 && startWith(this.text(),player_text) ){
                        this.textColor("#ff0000");
                    }else{
                        this.textColor("#ffffff");
                    }
                })
                    
                })
    });

    Crafty.scene("Multi", function () {

    });

    Crafty.scene("Credit", function () {

    });

    Crafty.scene("Loading", function () {
        Crafty.load(['img/bg.png', 'img/menu.png', 'img/single.png'], function () {
            Crafty.scene('Start');
        });

        Crafty.e('2D,DOM,Text,TextFormat')
            .text('Loading...')
            .attr({
            x: width / 2,
            y: height / 2
        });
    });

    Crafty.scene("Loading");
};