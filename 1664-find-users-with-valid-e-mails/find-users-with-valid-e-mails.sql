# Write your MySQL query statement below

WITH correct_domain_name as (
    select * 
    from Users 
    where mail like '%@leetcode.com%'
)

SELECT * FROM correct_domain_name 
WHERE mail REGEXP '^[A-Za-z][A-Za-z0-9_.-]*@leetcode\.com$' 