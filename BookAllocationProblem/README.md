### Problem Statement
You are given an array ‘pages’ of integer numbers. In this array, the ‘pages[i]’ represents the number of pages in the ‘i-th’ book. There are ‘m’ number of students, and the task is to allocate all the books to the students. 

Allocate books in a way such that:
1. Each student gets at least one book.
2. Each book should be allocated to a student.
3. Book allocation should be in a contiguous manner.
 
You have to allocate the books to ‘m’ students such that the maximum number of pages assigned to a student is minimum.

### Example 1
Input
Number of books = 4 and Number of students = 2
pages[] = { 10,20,30,40}
Output 
60

### Explanation
All possible ways of book allocation are shown in the below figure
![image](https://files.codingninjas.in/article_images/book-allocation-problem-2-1675222026.webp)
The minimum of the maximum number of pages assigned = min{90,70,60} = 60. Hence, the required answer is 60.