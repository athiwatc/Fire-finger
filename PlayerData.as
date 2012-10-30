package  {
	
	public class PlayerData {

		private var hp:int;
		private var score:int;

		public function PlayerData() {
			// constructor code
			hp = 100;
			score = 0;
		}
		
		public function getHP()
		{
			return hp;
		}
		
		public function getScore()
		{
			return score;
		}
		
		public function getDamage(damage:int)
		{
			hp -= damage;
		}
		
		public function scoreUp(sc:int)
		{
			score += sc;
		}

	}
	
}
