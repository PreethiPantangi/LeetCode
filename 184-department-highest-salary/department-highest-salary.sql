# Write your MySQL query statement below
select new_table.Department, e.name as Employee, new_table.Salary
from employee e
JOIN (select d.name as Department, d.id as dep_id, max(e.salary) as Salary from employee e join department d on d.id = e.departmentId group by d.name) new_table on new_table.dep_id = e.departmentId and e.salary = new_table.Salary