# Write your MySQL query statement below

WITH result as (
    SELECT p.product_id, p.product_name, s.sale_date
    FROM Product p
    JOIN Sales s
    ON p.product_id = s.product_id
    order by p.product_id
)

SELECT distinct r.product_id, r.product_name
FROM result r
WHERE r.product_id NOT IN (
    SELECT product_id FROM result 
    WHERE sale_date NOT BETWEEN '2019-01-01' AND '2019-03-31'
)