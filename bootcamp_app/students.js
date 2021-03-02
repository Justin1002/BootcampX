const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const args = process.argv.slice(2)

pool.query (`
SELECT students.id as student_id, students.name as name, cohorts.name as cohort
FROM students
JOIN cohorts ON (cohorts.id = students.cohort_id)
WHERE cohorts.name LIKE '%${args[0]}%'  
LIMIT ${args[1] || 5};
`)
.then (res => {
  for (obj of res.rows) {
    console.log(`${obj.name} has an id of ${obj.student_id} and was in the ${obj.cohort} cohort`)
  }
})

.catch (err => console.error('query error', err.stack));

