// /**
//  * @param {character[]} tasks
//  * @param {number} n
//  * @return {number}
//  */
// var leastInterval = function(tasks, n) {
//     tasks = tasks.sort();
//     let res = new Array();
//     let map = {};
//     let current = 0;
//     for (let i = 0; i < tasks.length; i++) {
//         if (res.length === 0) {
//             res[i] = tasks[i];
//             current = i;
//         } else {
//             if (res[i-1] === tasks[i]) {
//                 res[i+n] = tasks[i];
//                 current = i+n;
//             } else {
//                 if(res[current] === tasks[i]) {
//                     res[current+n+1] = tasks[i];
//                     current = current+n+1;
//                 } else {
//                     let index = 0;
//                     while(res[index] !== undefined) {
//                         index += 1; 
//                     }
//                     if (res[index-1] !== tasks[i]) {
//                         res[index] = tasks[i]; 
//                         current = index;  
//                     }
//                 }
//             }
//         }
//     }
//     return res.length;
// };

/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function(tasks, n) {
    let freq = Array(26).fill(0);
    for (let task of tasks) {
        freq[task.charCodeAt(0) - 'A'.charCodeAt(0)]++;
    }
    freq.sort((a, b) => b - a);
    let chunk = freq[0] - 1;
    let idle = chunk * n;

    for (let i = 1; i < 26; i++) {
        idle -= Math.min(chunk, freq[i]);
    }

    return idle < 0 ? tasks.length : tasks.length + idle;
};