SELECT students.name as student, AVG(assignment_submissions.duration) as average_assignment_duration, AVG(assignments.duration) as average_estimated_duration
FROM assignment_submissions
JOIN students ON (assignment_submissions.student_id = students.id)
JOIN assignments ON (assignment_submissions.assignment_id = assignments.id)
WHERE students.end_date IS NULL
GROUP BY students.name
HAVING AVG(assignment_submissions.duration) < AVG(assignments.duration)
ORDER BY AVG(assignments.duration) ASC, AVG(assignment_submissions.duration) ASC