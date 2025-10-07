import java.util.StringJoiner;
class Solution {
    public String toGoatLatin(String sentence) {
        String[] words = sentence.split(" ");
        StringJoiner result = new StringJoiner(" ");
        StringBuilder aSuffix = new StringBuilder();
        for (String word : words) {
            aSuffix.append("a");
            Character ch = Character.toLowerCase(word.charAt(0));
            if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
                String newWord = word + "ma" + aSuffix;
                result.add(newWord);
            } else {
                result.add(word.substring(1) + word.charAt(0) + "ma" + aSuffix);
            }
        }
        return result.toString();
    }
}