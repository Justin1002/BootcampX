const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

const queryString = `
  SELECT students.id as student_id, students.name as name, cohorts.name as cohort
  FROM students
  JOIN cohorts ON cohorts.id = cohort_id
  WHERE cohorts.name LIKE $1
  LIMIT $2;
  `;

  const cohortName = process.argv[2];
  const limit = process.argv[3] || 5;
  const values = [`%${cohortName}%`, limit];
  
pool.query(queryString, values)
.then (res => {
  for (obj of res.rows) {
    console.log(`${obj.name} has an id of ${obj.student_id} and was in the ${obj.cohort} cohort`)
  }
})

.catch (err => console.error('query error', err.stack));

