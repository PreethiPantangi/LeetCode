const insertionSort = (arr) => {
    let res = new Array(arr.length).fill(-1);
    for (let i = 0; i < arr.length; i++) {
        if(i === 0) {
            res[i] = arr[i];
        } else {
            for (let j = i; j > 0; j--) {
                if (arr[i] > res[j]) {
                    res[i] = arr[i];
                } else if (arr[i] < res[j]) {
                    
                }
            }
        }
    }
    console.log(res);
}

insertionSort([10,1,7,6,9,14]);