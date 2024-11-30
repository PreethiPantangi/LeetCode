# Write your MySQL query statement below

select result.product_id, 
round(
    CASE WHEN result.total_units > 0 THEN result.total_price/result.total_units
    ELSE 0 
    END, 2
) as average_price 
from  (
    select p.product_id, sum(COALESCE(p.price * us.units, 0)) as total_price, sum(COALESCE(us.  units, 0)) as total_units 
    from Prices p
    left join UnitsSold us on p.product_id = us.product_id 
    and us.purchase_date between p.start_date and p.end_date
    group by p.product_id
) as result