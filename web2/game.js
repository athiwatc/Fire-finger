window.onload = function () {
	var width = 760;
	var height = 640;

    Crafty.init(width, height);

    Crafty.c("Fix", {
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

		Crafty.e("Game,2D,DOM,Text,Fix")
			.text("FireFinger")
			.textColor("#ffffff")
			.textFont({
				size: "30px",
				family: "Segoe UI"
			})
			.attr({
				x: width/2,
				y: height/3,
				w: 200
			});

		Crafty.e("Single,2D,DOM,Text,Fix")
			.text("SinglePlayer")
			.textColor("#ffffff")
			.textFont({
				size : "20px",
				family:"Segoe UI"
			})
			.attr({
				x: width/2,
				y: height/3 + 100
			})
			.css('text-align', 'center');

	});

	Crafty.scene("Single",function(){

	});

	Crafty.scene("Multi",function(){

	});

	Crafty.scene("Credit",function(){

	});

	Crafty.scene("Start");
};