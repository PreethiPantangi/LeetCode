# Write your MySQL query statement below

select max(result.num) as num from (select *
from MyNumbers
group by num
HAVING COALESCE(count(*), 0) <= 1) result