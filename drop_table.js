// drop_table.js
const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('quiz.db');
db.run('DROP TABLE IF EXISTS quiz_results', (err) => {
  if (err) {
    console.error('Error dropping table:', err);
  } else {
    console.log('quiz_results 테이블이 삭제되었습니다.');
  }
  db.close();
});
