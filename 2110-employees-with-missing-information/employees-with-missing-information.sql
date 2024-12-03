# Write your MySQL query statement below

(
    SELECT employee_id 
    FROM Employees e
    WHERE e.employee_id NOT IN (SELECT employee_id FROM Salaries)
) UNION (
    SELECT employee_id
    FROM Salaries s
    WHERE s.employee_id NOT IN (SELECT employee_id FROM Employees)
)
ORDER by employee_id
