# Write your MySQL query statement below

with result as (
    SELECT 
        customer_id,
        CASE 
            WHEN customer_pref_delivery_date - order_date = 0 THEN 'Immediate'
            ELSE 'Scheduled'
        END AS delivery_status,
    row_number() over(partition by customer_id order by order_date) as row_num
    FROM 
        Delivery
    ORDER BY 
        customer_id, order_date
)

select round((sum(if(delivery_status = 'Immediate', 1, 0)))/(count(*)) * 100, 2) as immediate_percentage
from result 
where row_num = 1