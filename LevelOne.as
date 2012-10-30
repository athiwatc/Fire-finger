package  {

	import org.as3commons.collections.ArrayList;

	public class LevelOne implements TextLevel{
		
		private static var list:ArrayList = new ArrayList();
		private static var speed:int = 2;
		private static var point:int = 10;
		private static var damage:int = 10;

		{
			list.add(new String("GOOD"));
			list.add(new String("FEEL"));
			list.add(new String("FREE"));
			list.add(new String("JACK"));
			list.add(new String("PULL"));
			list.add(new String("PUSH"));
			list.add(new String("PLUS"));
			list.add(new String("LIKE"));
			list.add(new String("KILL"));
			list.add(new String("GRID"));
			list.add(new String("POLL"));
			list.add(new String("LOSE"));
			list.add(new String("TRIP"));
			list.add(new String("TRAP"));
			list.add(new String("PICK"));
			list.add(new String("QUIT"));
			list.add(new String("BIRD"));
			list.add(new String("WEEK"));
			list.add(new String("FIRE"));
		}
		
		public function getText():String
		{
			return list.itemAt(random(0,list.size-1));
		}
		
		public function getSpeed():int
		{
			return speed;
		}
		
		public function getPoint():int
		{
			return point;
		}
		
		public function getDamage():int
		{
			return damage;
		}
				
		private static function random(min:Number,max:Number):Number
		{
			return Math.round(Math.random() * max|min) + 1;
		}

	}
	
}
