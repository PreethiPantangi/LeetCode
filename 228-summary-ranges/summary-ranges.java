class Solution {
    public List<String> summaryRanges(int[] nums) {
        List<String> result = new ArrayList<>();
        for(int i = 0; i < nums.length; i++) {
            int rangeStart = nums[i];
            int rangeEnd = nums[i];
            int j = i + 1;
            while(j < nums.length) {
                if(Math.abs(rangeEnd - nums[j]) != 1) break;
                rangeEnd = nums[j];
                j += 1;
            }
            if(rangeStart == rangeEnd) {
                result.add(rangeStart+"");
            } else {
                result.add(rangeStart + "->" + rangeEnd);
                i = j-1;
            }
        }
        return result;
    }
}