class MyQueue {
    Stack<Integer> stack;
    
    public MyQueue() {
        stack = new Stack<>();
    }
    
    public void push(int x) {
        stack.push(x);
    }
    
    public int pop() {
        int result = 0;
        if(!stack.isEmpty()) {
            result = stack.get(0);
            stack.removeElementAt(0);
        }
        return result;
    }
    
    public int peek() {
        return stack.firstElement();
    }
    
    public boolean empty() {
        return stack.size() == 0;
    }
}

/**
 * Your MyQueue object will be instantiated and called as such:
 * MyQueue obj = new MyQueue();
 * obj.push(x);
 * int param_2 = obj.pop();
 * int param_3 = obj.peek();
 * boolean param_4 = obj.empty();
 */