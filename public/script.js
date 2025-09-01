let quizData = [];
let quizOrder = [];
let currentQuiz = 0;
let userName = "";
let userDept = "";
let userAnswers = [];
let score = 0;

window.onload = function() {
  fetch('quizData.json')
    .then(res => res.json())
    .then(data => {
      quizData = data;
      initQuiz();
    });
};

function initQuiz() {
  // 이름/소속 입력 화면
  const userInfoArea = document.getElementById('userInfoArea');
  const userNameInput = document.getElementById('userName');
  const userDeptInput = document.getElementById('userDept');
  const userInfoBtn = document.getElementById('userInfoBtn');
  // 시작하기 화면
  const startArea = document.getElementById('startArea');
  const startBtn = document.getElementById('startBtn');
  // 퀴즈 화면
  const quizContainer = document.querySelector('.quiz-container');
  const questionText = document.getElementById('questionText');
  const quizForm = document.getElementById('quizForm');
  const feedbackArea = document.getElementById('feedbackArea');

  userInfoBtn.onclick = function() {
    userName = userNameInput.value.trim();
    userDept = userDeptInput.value.trim();
    if (!userName || !userDept) {
      alert("이름과 소속을 입력하세요.");
      return;
    }
    userInfoArea.style.display = "none";
    startArea.style.display = "block";
  };

  startBtn.onclick = function() {
    startArea.style.display = "none";
    quizContainer.style.display = "block";
    quizOrder = Array.from({length: quizData.length}, (_, i) => i); // 고정 순서
    currentQuiz = 0;
    userAnswers = [];
    score = 0;
    loadQuiz(currentQuiz);
  };

  function loadQuiz(idx) {
    const qIdx = quizOrder[idx];
    const q = quizData[qIdx];
    questionText.textContent = `(${idx+1}/${quizData.length}) [배점: ${q.score}] ${q.question}`;
    const optionsHtml = q.options.map((opt, i) =>
      `<label><input type="radio" name="answer" value="${i}"> ${opt}</label><br>`
    ).join('');
    quizForm.innerHTML = optionsHtml + `<button type="button" id="submitBtn">정답 제출</button>`;
    feedbackArea.textContent = "";
    document.getElementById('submitBtn').onclick = submitAnswer;
  }

  function submitAnswer() {
    const qIdx = quizOrder[currentQuiz];
    const q = quizData[qIdx];
    const checked = quizForm.querySelector('input[name="answer"]:checked');
    if (!checked) {
      feedbackArea.textContent = "답을 선택해 주세요!";
      return;
    }
    const answer = parseInt(checked.value, 10);
    userAnswers[currentQuiz] = {
      question: q.question,
      userAnswer: q.options[answer],
      userAnswerIdx: answer,
      correct: q.options[q.correct],
      isCorrect: answer === q.correct ? "O" : "X",
      feedback: q.feedback[answer],
      quizIdx: qIdx
    };
    score += (answer === q.correct ? q.score : 0);

    if (currentQuiz < quizData.length - 1) {
      currentQuiz++;
      loadQuiz(currentQuiz);
    } else {
      showSummary();
    }
  }

  function showSummary() {
    // 문제별 요약 테이블 생성
    let summaryHtml = `<h2 style="margin-bottom:30px;">내가 푼 문제 요약</h2>
      <table style="width:100%;font-size:18px;border-collapse:collapse;">
        <thead>
          <tr>
            <th style="border-bottom:1px solid #ccc;">번호</th>
            <th style="border-bottom:1px solid #ccc;">문제</th>
            <th style="border-bottom:1px solid #ccc;">내 답</th>
            <th style="border-bottom:1px solid #ccc;">정답</th>
            <th style="border-bottom:1px solid #ccc;">정/오답</th>
            <th style="border-bottom:1px solid #ccc;">해설</th>
          </tr>
        </thead>
        <tbody>
    `;
    for (let i = 0; i < quizData.length; i++) {
      const ans = userAnswers[i] || {};
      const isCorrect = ans.isCorrect === "O";
      summaryHtml += `
        <tr>
          <td style="padding:6px 4px;">${i+1}</td>
          <td style="padding:6px 4px;">${quizData[i].question}</td>
          <td style="padding:6px 4px;">${ans.userAnswer || "-"}</td>
          <td style="padding:6px 4px;">${quizData[i].options[quizData[i].correct]}</td>
          <td style="padding:6px 4px;color:${isCorrect ? "#2e7d32" : "#c62828"};">${isCorrect ? "정답" : "오답"}</td>
          <td style="padding:6px 4px;">${quizData[i].feedback[ans.userAnswerIdx || 0]}</td>
        </tr>
      `;
    }
    summaryHtml += `</tbody></table>
      <div style="margin:30px 0;font-size:22px;">
        <b>최종 점수: ${score}점 / ${quizData.reduce((a,b)=>a+b.score,0)}점</b>
      </div>
      <button id="finalSubmitBtn" style="font-size:22px;padding:14px 44px;border-radius:16px;background:linear-gradient(90deg,#a8e063,#f9d423);color:#5a3e1b;border:none;cursor:pointer;">최종 제출</button>
    `;
    quizContainer.innerHTML = summaryHtml;

    document.getElementById('finalSubmitBtn').onclick = function() {
      let answerArr = Array(quizData.length).fill("");
      userAnswers.forEach(ans => {
        if (ans && typeof ans.quizIdx === "number") {
          answerArr[ans.quizIdx] = (ans.userAnswerIdx + 1).toString();
        }
      });
      answerArr = answerArr.map(a => a || "0");

      fetch('/save-quiz', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          name: userName,
          dept: userDept,
          question: "[최종제출]",
          userAnswer: answerArr.join("/"),
          correct: score,
          isCorrect: "",
          feedback: ""
        })
      }).then(() => {
        quizContainer.innerHTML = `
          <div style="margin:80px 0 40px 0;font-size:22px;">
            퀴즈가 종료되었습니다.<br>
            <b>최종 점수: ${score}점 / ${quizData.reduce((a,b)=>a+b.score,0)}점</b><br>
            참여해주셔서 감사합니다!
          </div>
        `;
      });
    };
  }
}
