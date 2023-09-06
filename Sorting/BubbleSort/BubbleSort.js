const bubbleSort = (nums) => {
    for (let i = 0; i < nums.length-1; i++) {
        let isSwapped = false;
        for (let j = i+1; j < nums.length; j++) {
            if(nums[i] > nums[j]) {
                temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
                isSwapped = true;
            }
        }
        if (isSwapped === false) {
            break;
        }
    }
    console.log(nums);
}

bubbleSort([10,1,7,6,9,14]);