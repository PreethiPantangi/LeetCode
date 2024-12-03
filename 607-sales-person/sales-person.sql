# Write your MySQL query statement below

WITH SalesPerson_Company AS (
    SELECT sp.name, c.name AS company_name
    FROM SalesPerson sp
    LEFT JOIN Orders o ON o.sales_id = sp.sales_id 
    LEFT JOIN Company c ON c.com_id = o.com_id
)

SELECT distinct name
FROM SalesPerson_Company
WHERE name not in (
    SELECT name 
    FROM SalesPerson_Company
    WHERE company_name = 'RED'
)
