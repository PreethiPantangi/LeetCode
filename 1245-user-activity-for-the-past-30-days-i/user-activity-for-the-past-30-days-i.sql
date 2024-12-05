# Write your MySQL query statement below

with result as (
    select * from Activity 
    where activity_date between '2019-06-28' and '2019-07-27'
    group by user_id, activity_date
)

SELECT result.activity_date AS day, count(*) as active_users 
FROM result
GROUP BY result.activity_date
