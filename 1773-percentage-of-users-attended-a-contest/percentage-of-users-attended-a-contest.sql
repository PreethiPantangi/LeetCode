# Write your MySQL query statement below

with result as (
    select count(*) as total_users from Users
)

select r.contest_id, 
round((count(*) / (select total_users from result)) * 100, 2)  as percentage
from Register r
group by r.contest_id
order by percentage desc, r.contest_id asc