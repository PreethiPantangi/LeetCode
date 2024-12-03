# Write your MySQL query statement below

SELECT result.player_id, result.event_date as first_login 
FROM (
    SELECT *,
    rank() over(partition by player_id order by event_date) as rn
    FROM Activity 
) as result
WHERE result.rn = 1