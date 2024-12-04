# Write your MySQL query statement below

SELECT result.customer_number from (
    select customer_number, count(customer_number) as order_count from orders
    group by customer_number
    order by order_count desc limit 1
) as result