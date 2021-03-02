SELECT cohorts.name, AVG(completed_at-started_at) as average_assistance_time
FROM assistance_requests
JOIN students ON (students.id = assistance_requests.student_id)
JOIN cohorts ON (students.cohort_id = cohorts.id)
GROUP BY cohorts.name
ORDER BY average_assistance_time DESC
LIMIT 1