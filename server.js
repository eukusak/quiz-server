const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');
const session = require('express-session');
const fs = require('fs');

const app = express();
const db = new sqlite3.Database('quiz.db');

// quizData를 public/quizData.json에서 불러옴
const quizData = JSON.parse(fs.readFileSync(path.join(__dirname, 'public', 'quizData.json'), 'utf8'));

// ★★★ 테이블 생성 코드 ★★★
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS quiz_results (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT,
    dept TEXT,
    question TEXT,
    userAnswer TEXT,
    correct TEXT,
    isCorrect TEXT,
    feedback TEXT,
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

// 소속/성함 중복 체크 API
app.post('/check-duplicate', (req, res) => {
  const { name, dept } = req.body;
  if (!name || !dept) return res.json({ duplicate: false });
  db.get(
    'SELECT * FROM quiz_results WHERE name=? AND dept=? AND question="[최종제출]"',
    [name, dept],
    (err, row) => {
      if (row) return res.json({ duplicate: true });
      res.json({ duplicate: false });
    }
  );
});

// 퀴즈 결과 저장 (최종 제출만 저장)
app.post('/save-quiz', (req, res) => {
  const { name, dept, question, userAnswer, correct, isCorrect, feedback } = req.body;
  if (!name || !dept || !question) {
    return res.status(400).json({ error: 'Invalid data' });
  }
  if (question !== "[최종제출]") {
    return res.json({ ok: true });
  }
  db.get(
    'SELECT * FROM quiz_results WHERE name=? AND dept=? AND question=?',
    [name, dept, question],
    (err, row) => {
      if (row) {
        return res.json({ ok: false, msg: '이미 제출한 문제입니다.' });
      }
      db.run(
        'INSERT INTO quiz_results (name, dept, question, userAnswer, correct, isCorrect, feedback) VALUES (?, ?, ?, ?, ?, ?, ?)',
        [name, dept, question, userAnswer, correct, isCorrect, feedback || ""],
        function (err2) {
          if (err2) {
            console.error('DB Error:', err2);
            return res.status(500).json({ error: 'DB Error' });
          }
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

// 관리자: 전체 결과 CSV 다운로드 (문제별 답, 점수, 제출시각만 한 줄로, 문제 제목 포함)
app.get('/admin/download-csv', (req, res) => {
  if (!req.session.admin) return res.status(403).send('Forbidden');
  db.all('SELECT * FROM quiz_results WHERE question="[최종제출]" ORDER BY dept, name, created', (err, rows) => {
    if (err) return res.status(500).send('DB Error');
    let csv = '소속,성함';
    for (let i = 0; i < quizData.length; i++) {
      csv += `,"${i+1}. ${quizData[i].question.replace(/"/g, '""')}"`;
    }
    csv += ',점수,제출시간\n';
    rows.forEach(r => {
      const answers = (r.userAnswer || '').split('/');
      while (answers.length < quizData.length) answers.push("0");
      csv += `"${r.dept}","${r.name}"`;
      for (let i = 0; i < quizData.length; i++) {
        csv += `,"${answers[i] || "0"}"`;
      }
      csv += `,"${r.correct || ""}","${r.created}"\n`;
    });
    res.setHeader('Content-Type', 'text/csv; charset=UTF-8');
    res.setHeader('Content-Disposition', 'attachment; filename="quiz_results.csv"');
    res.send('\uFEFF' + csv);
  });
});

// 404 처리
app.use((req, res) => {
  res.status(404).send('페이지를 찾을 수 없습니다.');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`서버가 http://localhost:${PORT} 에서 실행 중`);
});
