# Write your MySQL query statement below


SELECT ROUND(sum(i.tiv_2016), 2) as tiv_2016 
FROM Insurance i
WHERE (i.lat, i.lon) IN (
    SELECT lat, lon
    FROM Insurance  
    GROUP BY lat, lon
    HAVING count(*) = 1
) AND i.tiv_2015 IN (
    SELECT tiv_2015
    FROM Insurance  
    GROUP BY tiv_2015
    HAVING count(*) > 1
)
