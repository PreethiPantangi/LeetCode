# Write your MySQL query statement below

select t1.manager_name as name
from (
    select e1.id, e1.name as manager_name, count(e2.name) as emp_count from Employee e1
    join Employee e2 on e1.id = e2.managerId
    group by e1.id, e1.name
) as t1 where t1.emp_count >= 5 or t1.manager_name is null
