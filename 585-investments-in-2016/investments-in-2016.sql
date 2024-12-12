# Write your MySQL query statement below

WITH distinct_lat_long as (
    SELECT lat, lon, count(*)
    FROM Insurance  
    GROUP BY lat, lon
    HAVING count(*) = 1
), same_tiv as (
    SELECT tiv_2015
    FROM Insurance  
    GROUP BY tiv_2015
    HAVING count(*) > 1
)

SELECT ROUND(sum(i.tiv_2016), 2) as tiv_2016 FROM Insurance i
join distinct_lat_long dll on dll.lat = i.lat and dll.lon = i.lon
join same_tiv st on st.tiv_2015 = i.tiv_2015
