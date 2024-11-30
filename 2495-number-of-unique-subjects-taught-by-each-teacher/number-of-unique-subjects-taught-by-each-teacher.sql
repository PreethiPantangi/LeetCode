# Write your MySQL query statement below

-- select teacher_id, 
-- sum(cnt)
-- from (
--     select teacher_id, count(subject_id) as cnt from Teacher
--     group by teacher_id, subject_id
-- ) as t1
-- group by teacher_id

select result.teacher_id, count(result.subject_id) as cnt from 
(
    select teacher_id, subject_id from Teacher
    group by teacher_id, subject_id
) result
group by result.teacher_id