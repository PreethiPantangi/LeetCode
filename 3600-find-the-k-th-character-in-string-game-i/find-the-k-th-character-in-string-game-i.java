class Solution {
    public char kthCharacter(int k) {
        String word = "a";
        word = generateString(word, k);
        return word.charAt(k-1);
    }

    private static String generateString(String word, int k) {
        if(word.length() == k) {
            return word;
        }

        int i = 0;
        String currentWord = word;
        while(i < word.length() && currentWord.length() != k) {
            currentWord += (char) (((int) word.charAt(i)) + 1);
            i += 1;
        }
        return generateString(currentWord, k);
    }
}