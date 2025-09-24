class Solution {
    public char nextGreatestLetter(char[] letters, char target) {
        int val = target - 'a';
        for(int i = 0; i < letters.length; i++) {
            if(letters[i] != target && letters[i] - 'a' > val) return letters[i];
        }
        return letters[0];
    }
}