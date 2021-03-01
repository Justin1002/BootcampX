SELECT cohorts.name as cohort_name, COUNT(students.name) as student_count
FROM cohorts
JOIN students ON (cohorts.id = students.cohort_id)
GROUP BY cohorts.name
HAVING count(students.name) >= 18
ORDER BY count(students.name) ASC
