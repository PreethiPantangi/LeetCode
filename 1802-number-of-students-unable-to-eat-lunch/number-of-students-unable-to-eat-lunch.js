/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
var countStudents = function(students, sandwiches) {
    let i = j = 0;
    let count = 0;
    while(students.length > 0) {
        if(students[i] === sandwiches[j]) {
            students.shift();
            sandwiches.shift();
            count = 0;
        } else {
            let student = students.shift();
            students.push(student);
            count += 1;
        }
        if(count === students.length)
            break;
    }
    return students.length;
};