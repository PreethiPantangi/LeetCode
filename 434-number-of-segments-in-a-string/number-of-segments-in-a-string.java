class Solution {
    public int countSegments(String s) {
        int segments = 0;

        int i = 0;
        while(i < s.length() && s.charAt(i) == ' ') {
            i += 1;
        }

        while(i < s.length()) {
            if(s.charAt(i) != ' ') {
                segments += 1;
                while(i < s.length() && s.charAt(i) != ' ') {
                    i += 1;
                }
            }

            while(i < s.length() && s.charAt(i) == ' ') {
                i += 1;
            }
            
        }
        return segments;
    }
}