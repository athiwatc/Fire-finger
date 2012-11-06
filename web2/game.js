window.onload = function () {
	var width = 760;
	var height = 640;

    Crafty.init(width, height);

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

	Crafty.background('rgb(127,127,127)');

	Crafty.scene("Start",function(){

		Crafty.e("2D,DOM,Text,Image")
		.image('bg.png')
		.attr({
			x: 0,
			y: 0,
			w: width,
			h: height
		});

		Crafty.e("Game,2D,DOM,Text,TextFormat")
			.text("Fire Finger")
			.textColor("#ffffff")
			.textFont({
				size: "32px",
				family: "Segoe UI",
				type: "Italic",
				weight: "Bold"
			})
			.attr({
				x: width/2 - 60,
				y: height/3,
				w: 200
			});

		Crafty.e("Single,2D,DOM,Text,TextFormat")
			.text("SinglePlayer")
			.textColor("#ffffff")
			.textFont({
				size : "20px",
				family:"Segoe UI",
				type: "Italic"
			})
			.attr({
				x: width/2 - 40,
				y: height/3 + 100
			});

		Crafty.e("Single,2D,DOM,Text,TextFormat")
			.text("MultiPlayer")
			.textColor("#ffffff")
			.textFont({
				size : "20px",
				family:"Segoe UI",
				type: "Italic"
			})
			.attr({
				x: width/2 - 40,
				y: height/3 + 140
			});

		Crafty.e("Single,2D,DOM,Text,TextFormat")
			.text("Credit")
			.textColor("#ffffff")
			.textFont({
				size : "20px",
				family:"Segoe UI",
				type: "Italic"
			})
			.attr({
				x: width/2 - 20,
				y: height/3 + 180
			});

	});

	Crafty.scene("Single",function(){

	});

	Crafty.scene("Multi",function(){

	});

	Crafty.scene("Credit",function(){

	});

	Crafty.scene("Loading", function() {
		Crafty.load(['bg.png'], function() {
			Crafty.scene('Start');
		});

		Crafty.e('2D,DOM,Text,TextFormat')
		.text('Loading...')
		.attr({
			x: width/2,
			y: height/2
		});
	});

	Crafty.scene("Loading");
};