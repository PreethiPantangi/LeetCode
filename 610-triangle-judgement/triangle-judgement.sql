# Write your MySQL query statement below

select *, 
(
    CASE WHEN x + y > z and x + z > y and y + z > x THEN "Yes"
    ELSE "No"
    END
) as triangle
from Triangle