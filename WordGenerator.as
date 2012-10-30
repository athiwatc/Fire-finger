package 
{
	
	public class WordGenerator
	{
		private static var MAX_WIDTH:int = 400;
		private static var MIN_WIDTH:int = 100;
		private static var level:TextLevel = new LevelOne();
		private static var diff:int;
		private static var start_y = -30;

		public static function createWord()
		{
			return new WordData(level.getText()
								,level.getSpeed()
								,level.getPoint()
								,level.getDamage());
		}
		
		public static function setDifficult(level:int)
		{
			
		}
		
	}

}