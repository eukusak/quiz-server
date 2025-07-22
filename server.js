const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const session = require('express-session');

const app = express();
const db = new sqlite3.Database('quiz.db');

// DB 테이블 생성
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS quiz_results (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    dept TEXT,
    question TEXT,
    userAnswer TEXT,
    correct TEXT,
    isCorrect TEXT,
    created DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);
});

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret: 'otg_quiz_secret',
  resave: false,
  saveUninitialized: true
}));

// 퀴즈 결과 저장 (문제별로 한 번만 저장)
app.post('/save-quiz', (req, res) => {
  const { name, dept, question, userAnswer, correct, isCorrect } = req.body;
  if (!name || !dept || !question) {
    return res.status(400).json({ error: 'Invalid data' });
  }
  // 이미 저장된 기록이 있는지 확인
  db.get(
    'SELECT * FROM quiz_results WHERE name=? AND dept=? AND question=?',
    [name, dept, question],
    (err, row) => {
      if (row) {
        return res.json({ ok: false, msg: '이미 제출한 문제입니다.' });
      }
      db.run(
        'INSERT INTO quiz_results (name, dept, question, userAnswer, correct, isCorrect) VALUES (?, ?, ?, ?, ?, ?)',
        [name, dept, question, userAnswer, correct, isCorrect],
        function (err2) {
          if (err2) return res.status(500).json({ error: 'DB Error' });
          res.json({ ok: true });
        }
      );
    }
  );
});

// 관리자 로그인 페이지
app.get('/admin', (req, res) => {
  if (req.session.admin) {
    return res.sendFile(path.join(__dirname, 'public', 'admin.html'));
  }
  res.sendFile(path.join(__dirname, 'public', 'admin_login.html'));
});

// 관리자 로그인 처리
app.post('/admin/login', (req, res) => {
  let body = '';
  req.on('data', chunk => { body += chunk; });
  req.on('end', () => {
    const params = new URLSearchParams(body);
    const id = params.get('id');
    const pw = params.get('pw');
    if (id === '20210295' && pw === 'otg123') {
      req.session.admin = true;
      res.redirect('/admin');
    } else {
      res.send(`<script>alert('로그인 실패');location.href='/admin';</script>`);
    }
  });
});

// 관리자 로그아웃
app.get('/admin/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/admin');
  });
});

// 관리자: 전체 결과 CSV 다운로드 (로그인 필요)
app.get('/admin/download-csv', (req, res) => {
  if (!req.session.admin) return res.status(403).send('Forbidden');
  db.all('SELECT * FROM quiz_results ORDER BY created DESC', (err, rows) => {
    if (err) return res.status(500).send('DB Error');
    let csv = '이름,소속,문제,내답,정답,정오,제출시각\n';
    rows.forEach(r => {
      csv += `"${r.name}","${r.dept}","${r.question}","${r.userAnswer}","${r.correct}","${r.isCorrect}","${r.created}"\n`;
    });
    res.setHeader('Content-Type', 'text/csv; charset=UTF-8');
    res.setHeader('Content-Disposition', 'attachment; filename="quiz_results.csv"');
    res.send('\uFEFF' + csv); // 엑셀 한글깨짐 방지(BOM)
  });
});

// 404 처리 (정적 파일/라우트가 없을 때)
app.use((req, res) => {
  res.status(404).send('페이지를 찾을 수 없습니다.');
});

// 서버 시작 (Render 등 클라우드 환경 대응)
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중`);
});
