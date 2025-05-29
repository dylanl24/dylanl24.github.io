public class Scores{
    private int totalScore;
    private int numRounds;

    public Scores(){
        numRounds = 0;
        totalScore = 0;
    }

    public void addScore(int score){
        totalScore += score;
        numRounds ++;
    }

    public double getAvgScore(){
        return (double)totalScore / numRounds;
    }



}