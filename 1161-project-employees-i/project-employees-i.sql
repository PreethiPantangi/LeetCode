# Write your MySQL query statement below

select project_id, round(
    CASE WHEN total_exp > 0 THEN total_exp/total_emp_count
    ELSE 0
    END, 2
) as average_years
from (
        select p.project_id, p.employee_id, e.name, coalesce(sum(e.experience_years), 0) as total_exp, coalesce(count(p.project_id), 0) as total_emp_count
    from Project p 
    left join Employee e on p.employee_id = e.employee_id
    group by p.project_id
) as result