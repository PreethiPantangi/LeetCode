# Write your MySQL query statement below

with result as (
    select product_id, sum(unit) as unit
    from Orders 
    where year(order_date) = 2020 and month(order_date) = 2
    group by product_id
    having unit >= 100
)

select p.product_name, r.unit
from Products p
join result r
on p.product_id = r.product_id

