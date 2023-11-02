/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    let unableToEat = 0;
    while(students.length > 0) {
        if(students[0] === sandwiches[0]) {
            students.shift();
            sandwiches.shift();
            unableToEat = 0;
        } else {
            students.push(students.shift());
            unableToEat++;
        }
        if (unableToEat === students.length) {
            break;
        }
    }
    return students.length;
};


console.log(countStudents([1,1,0,0], [0,1,0,1]));
console.log(countStudents([1,1,1,0,0,1], [1,0,0,0,1,1]));