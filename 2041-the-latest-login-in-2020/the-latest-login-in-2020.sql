# Write your MySQL query statement below

SELECT distinct user_id,
max(time_stamp) over(partition by user_id order by time_stamp desc) as last_stamp 
FROM Logins
WHERE year(time_stamp) = 2020