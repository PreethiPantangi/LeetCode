class Solution {
    public int[] nextGreaterElements(int[] nums) {
        int n = nums.length;
        Stack<Integer> stack = new Stack<>();
        int[] result = new int[n];
        for(int i = 2 * n -1; i >= 0; i--) {
            while(!stack.isEmpty() && stack.peek() <= nums[i%n]) {
                stack.pop();
            }

            if(i < n) {
                result[i] = stack.isEmpty() ? -1 : stack.peek(); 
            }
            stack.push(nums[i%n]);
        }
        return result;
    }
}