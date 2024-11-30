# Write your MySQL query statement below

WITH confirmed_requests AS (
    SELECT 
        s.user_id, 
        COUNT(c.action) AS confirmed
    FROM 
        Signups s
    LEFT JOIN 
        Confirmations c 
    ON 
        c.user_id = s.user_id AND c.action = 'confirmed'
    GROUP BY 
        s.user_id
),
total_requests AS (
    SELECT 
        s1.user_id, 
        COUNT(*) AS total
    FROM 
        Signups s1
    LEFT JOIN 
        Confirmations c1 
    ON 
        c1.user_id = s1.user_id
    GROUP BY 
        s1.user_id
)

select cr.user_id, round(cr.confirmed/tr.total, 2) as confirmation_rate
from confirmed_requests cr
left join total_requests tr on tr.user_id = cr.user_id 
