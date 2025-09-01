let quizData = [];
let quizOrder = [];
let currentQuiz = 0;
let userName = "";
let userDept = "";
let userAnswers = [];
let score = 0;

// 영상 파일 경로 (모든 문제 동일, 파일명 ai.mp4)
const videoSrc = "ai.mp4";

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
    // 영상 자동 재생, 재생바 숨김, 크기 2배로 키움, 파일명 ai.mp4
    quizContainer.innerHTML = `
      <div class="question-video-area" style="text-align:center;">
        <video width="640" height="360" autoplay muted playsinline style="border-radius:16px;border:2px solid #b4d3a7;background:#eaf6e7;box-shadow:0 2px 16px rgba(120,180,120,0.14);margin-bottom:18px;object-fit:cover;max-width:98vw;">
          <source src="${videoSrc}" type="video/mp4">
          브라우저가 video 태그를 지원하지 않습니다.
        </video>
      </div>
      <div class="question-area" style="text-align:center;">
        <div id="questionText" style="font-size:22px;font-weight:bold;color:#4b3f2f;margin-bottom:20px;text-align:center;">
          (${idx+1}/${quizData.length}) [배점: ${q.score}] ${q.question}
        </div>
        <form id="quizForm" style="text-align:center;display:inline-block;">
          ${q.options.map((opt, i) => `
            <label style="display:block;font-size:20px;margin-bottom:12px;text-align:left;min-width:260px;">
              <input type="radio" name="answer" value="${i}" style="margin-right:10px;"> ${opt}
            </label>
          `).join('')}
          <button type="button" id="submitBtn" style="display:block;margin:24px auto 0 auto;">정답 제출</button>
        </form>
        <div id="feedbackArea" style="margin-top:18px;"></div>
      </div>
    `;
    document.getElementById('submitBtn').onclick = submitAnswer;
  }

  function submitAnswer() {
    const qIdx = quizOrder[currentQuiz];
    const q = quizData[qIdx];
    const quizForm = document.getElementById('quizForm');
    const checked = quizForm.querySelector('input[name="answer"]:checked');
    const feedbackArea = document.getElementById('feedbackArea');
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

  // 해설 앞에 "해설:"만 붙이고, 모든 "정답입니다! 해설:", "오답입니다! 해설:", "틀렸습니다. 해설:", "정답입니다!", "오답입니다!", "해설:" 등은 제거
  function cleanFeedback(feedback) {
    let cleaned = feedback;
    cleaned = cleaned.replace(/^정답입니다! 해설:\s*/, "");
    cleaned = cleaned.replace(/^오답입니다! 해설:\s*/, "");
    cleaned = cleaned.replace(/^틀렸습니다\. 해설:\s*/, "");
    cleaned = cleaned.replace(/^정답입니다!\s*/, "");
    cleaned = cleaned.replace(/^오답입니다!\s*/, "");
    cleaned = cleaned.replace(/^해설:\s*/, "");
    cleaned = cleaned.replace(/^틀렸습니다\.\s*/, "");
    return "해설: " + cleaned.trim();
  }

  function showSummary() {
    let summaryHtml = `<h2 style="margin-bottom:40px;text-align:left;">내가 푼 문제 결과</h2>`;
    for (let i = 0; i < quizData.length; i++) {
      const q = quizData[i];
      const ans = userAnswers[i] || {};
      const isCorrect = ans.isCorrect === "O";
      summaryHtml += `
        <div class="result-question-block" style="
          margin-bottom:48px;
          padding:32px 28px 32px 28px;
          border-radius:18px;
          background:#f7f5ed;
          box-shadow:0 2px 10px rgba(180,170,140,0.07);
          border:2.5px solid #e2decf;
          text-align:left;
          ">
          <div style="font-size:22px;font-weight:bold;color:#4b3f2f;margin-bottom:18px;text-align:left;">
            (${i+1}/${quizData.length}) [배점: ${q.score}] ${q.question}
          </div>
          <form style="margin-bottom:10px;text-align:left;">`;
      for (let j = 0; j < q.options.length; j++) {
        summaryHtml += `
          <label style="display:block;font-size:20px;margin-bottom:12px;text-align:left;color:${ans.userAnswerIdx === j ? "#2e7d32" : "#3d5a2a"};">
            <input type="radio" name="answer${i}" value="${j}" disabled ${ans.userAnswerIdx === j ? "checked" : ""}>
            ${q.options[j]}
          </label>
        `;
      }
      summaryHtml += `
          </form>
          <div style="font-size:19px;margin-bottom:6px;text-align:left;">
            <b>정답:</b> ${q.options[q.correct]}
          </div>
          <div style="font-size:18px;color:${isCorrect ? "#2e7d32" : "#c62828"};margin-bottom:4px;text-align:left;">
            <b>${isCorrect ? "정답입니다!" : "오답입니다!"}</b>
          </div>
          <div style="font-size:17px;color:#444;text-align:left;">
            ${cleanFeedback(q.feedback[ans.userAnswerIdx || 0])}
          </div>
        </div>
      `;
    }
    summaryHtml += `
      <div style="margin:40px 0 20px 0;font-size:22px;text-align:left;">
        <b>최종 점수: ${score}점 / ${quizData.reduce((a,b)=>a+b.score,0)}점</b>
      </div>
      <button id="finalSubmitBtn" style="font-size:22px;padding:14px 44px;border-radius:16px;background:linear-gradient(90deg,#a8e063,#f9d423);color:#5a3e1b;border:none;cursor:pointer;display:block;margin:0 auto;">최종 제출</button>
    `;
    document.querySelector('.quiz-container').innerHTML = summaryHtml;

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
      })
      .then(res => res.json())
      .then(result => {
        if (result.ok === false) {
          alert("이미 같은 소속과 이름으로 제출하셨습니다.\n중복 제출은 불가능합니다.");
          return;
        }
        document.querySelector('.quiz-container').innerHTML = `
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
