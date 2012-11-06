window.onload = function () {
	var width = 360;
	var height = 640;

    Crafty.init(width, height);
	Crafty.background('rgb(127,127,127)');

	Crafty.scene("Start",function(){

		Crafty.e("Game,2D,DOM,Text")
			.text("FireFinger")
			.css({
				textAlign:"center",
				font:"Arial",
				size:"50px"
			})
			.attr({
				x: width/2,
				y: height/3
			});

		Crafty.e("Single,2D,DOM,Text")
			.text("SinglePlayer")
			.css({
				textAlign:"center",
				font:"Serif"
			})
			.attr({
				x: width/2,
				y: height/3 + 100
			});

	});

	Crafty.scene("Single",function(){

	});

	Crafty.scene("Multi",function(){

	});

	Crafty.scene("Credit",function(){

	});

	Crafty.scene("Start");
};