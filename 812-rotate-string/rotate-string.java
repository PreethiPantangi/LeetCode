class Solution {
    public boolean rotateString(String s, String goal) {
        int i = 0;
        int j = 0;
        while (true) {
            Character ch = s.charAt(i);
            s = s.replaceFirst(Character.toString(ch), "") + ch;
            if(goal.equals(s)) {
                return true;
            }
            if(j == s.length()) break;
            j += 1;
        }
        return false;
    }
}