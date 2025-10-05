class Solution {
    public int maxRepeating(String sequence, String word) {
        String repeatedWord = word;
        int count = 0;
        while (sequence.contains(repeatedWord)) {
            count += 1;
            repeatedWord += word;
        }
        return count;
    }
}