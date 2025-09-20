class MinStack {

    private Stack<Long> stack;
    private Long min = Long.MAX_VALUE;

    public MinStack() {
        stack = new Stack<Long>();
    }
    
    public void push(int val) {
        Long value = Long.valueOf(val);
        if(stack.isEmpty()) {
            stack.push(value);
            min = value;
        } else {
            if(value < min) {
                stack.push(2 * value - min);
                min = value;
            } else  {
                stack.push(value);
            }
        }
    }
    
    public void pop() {
        if(stack.isEmpty()) return;
        Long val = stack.pop();
        if(val < min) {
            min = (2 * min) - val;
        }
    }
    
    public int top() {
        if(stack.peek() < min) return min.intValue();
        return stack.peek().intValue();
    }
    
    public int getMin() {
        return min.intValue();
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