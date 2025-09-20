class MinStack {

    private Stack<Integer> stack;
    private int minElement = Integer.MAX_VALUE;

    public MinStack() {
        stack = new Stack<>();
    }
    
    public void push(int val) {
        stack.push(val);
        minElement = Math.min(val, minElement);
    }
    
    public void pop() {
        stack.pop();
        minElement = Integer.MAX_VALUE;
        for (int i = 0; i < stack.size(); i++) {
            minElement = Math.min(minElement, stack.get(i));
        }
    }
    
    public int top() {
        return stack.peek();
    }
    
    public int getMin() {
        return minElement;
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.push(val);
 * obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.getMin();
 */