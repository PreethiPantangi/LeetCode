class Solution {
    public boolean isValid(String s) {
        Stack<Character> stack = new Stack<>();
        for(int i = 0; i < s.length(); i++) {
            if (s.charAt(i) == '(' || s.charAt(i) == '[' || s.charAt(i) == '{') {
                stack.add(s.charAt(i));
            } else {
                if(stack.size() != 0) {
                    char top = stack.pop();
                    if((top == '(' && s.charAt(i) != ')') || (top == '[' && s.charAt(i) != ']') || (top == '{' && s.charAt(i) != '}') ) {
                        return false;
                    }
                } else {
                    return false;
                }
            }
        }
        return stack.size() == 0;
    }
}