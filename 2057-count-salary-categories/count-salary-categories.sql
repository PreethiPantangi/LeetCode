# Write your MySQL query statement below

with categories as (
    select 'Low Salary' as category
    union all
    select 'Average Salary'
    union all
    select 'High Salary'
)
select c.category, COALESCE(result.accounts_count, 0) as accounts_count from categories c 
left join 
(
    select 
    (
        CASE WHEN income < 20000 THEN "Low Salary"
            WHEN income between 20000 and 50000 THEN "Average Salary"
            WHEN income > 50000 THEN "High Salary"
        END
    ) as category,
    count(*) as accounts_count
    from Accounts a
    group by category
) as result on c.category = result.category