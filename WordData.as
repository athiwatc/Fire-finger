package  {
	
	public class WordData {
		
		private var text:String;	// Text of word.
		private var speed:int;		// Speed of word.
		private var xpos:int;
		private var ypos:int;
		private var width:int;
		private var point:int;
		private var damage:int;
		
		private static var FONT_SIZE:int = 14;
		private static var HEIGHT:int = 25;
		private static var MAX_WIDTH:int = 400;
		private static var MIN_WIDTH:int = 100;
		
		public static var none:String = new String();	// Empty String

		public function WordData(txt:String,spd:int,p:int,dmg:int) {
			// constructor code
			text = txt;
			xpos = random(MIN_WIDTH,MAX_WIDTH);
			ypos = -20;
			speed = spd;
			point = p;
			damage = dmg;
			width = txt.length * FONT_SIZE;
			
			if( xpos + width > MAX_WIDTH )
			{
				xpos -= width;
			}
		}

		public function getText()
		{
			return text;
		}
		
		public function move()
		{
			ypos += speed;
		}
		
		public function getX()
		{
			return xpos;
		}
		
		public function getY()
		{
			return ypos;
		}
		
		public function getPoint()
		{
			return point;
		}
		
		public function getDamage()
		{
			return damage;
		}
		
		public function getWidth()
		{
			return width;
		}
		
		public function getHeight()
		{
			return HEIGHT;
		}
		
		private static function random(min:Number,max:Number):int
		{
			return min + ( Math.random() * ((max - min) + 1));
		}

	}
	
}
