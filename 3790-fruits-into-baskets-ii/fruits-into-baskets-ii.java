class Solution {
    public int numOfUnplacedFruits(int[] fruits, int[] baskets) {
        int count = 0;
        for(int i = 0; i < fruits.length; i++) {
            boolean found = false;
            for(int j = 0; j < baskets.length; j++) {
                if(baskets[j] >= fruits[i]) {
                    baskets[j] = -1;
                    found = true;
                    break;
                }
            }
            if(found == false) count += 1;
        }
        return count;
    }
}