class Solution {
    public int maxArea(int[] height) {
        int result = 0;
        int left = 0;
        int right = height.length - 1;
        while(left < right) {
            int water = (right - left) * Math.min(height[left], height[right]);
            result = Math.max(result, water);

            if(height[left] < height[right]) {
                left += 1;
            } else {
                right -=1;
            }
        }
        return result;
    }
}