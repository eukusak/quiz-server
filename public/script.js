let quizData = [];
const characterVideos = {
  normal: "ai_normal.mp4",
  correct: "ai_happy.mp4",
  wrong: "ai_sad.mp4"
};

function getRandomOrder(n) {
  const arr = Array.from({length: n}, (_, i) => i);
  for (let i = n - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

let quizOrder = [];
let currentQuiz = 0;
let userName = "";
let userDept = "";
let answered = [];
let score = 0;
let userAnswers = [];

window.onload = function() {
  // 문제 데이터 fetch
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
  const characterVideo = document.getElementById('characterVideo');
  const characterSpeech = document.getElementById('characterSpeech');
  const questionText = document.getElementById('questionText');
  const quizForm = document.getElementById('quizForm');
  const feedbackArea = document.getElementById('feedbackArea');
  const nextBtn = document.getElementById('nextBtn');
  const finishBtn = document.getElementById('finishBtn');

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
    quizOrder = getRandomOrder(quizData.length);
    currentQuiz = 0;
    answered = [];
    score = 0;
    userAnswers = [];
    loadQuiz(currentQuiz);
  };

  function setCharacterVideo(type) {
    characterVideo.pause();
    characterVideo.querySelector('source').src = characterVideos[type];
    characterVideo.load();
    characterVideo.play();
  }

  function loadQuiz(idx) {
    const qIdx = quizOrder[idx];
    const q = quizData[qIdx];
    setCharacterVideo('normal');
    characterSpeech.textContent = "문제를 맞춰봐!";
    questionText.textContent = `(${idx+1}/${quizData.length}) [배점: ${q.score}] ${q.question}`;
    const optionsHtml = q.options.map((opt, i) =>
      `<label><input type="radio" name="answer" value="${i}"> ${opt}</label><br>`
    ).join('');
    quizForm.innerHTML = optionsHtml + `<button type="button" id="submitBtn">정답 제출</button>`;
    feedbackArea.textContent = "";
    nextBtn.style.display = "none";
    finishBtn.style.display = "none";
    answered[idx] = false;
    document.getElementById('submitBtn').onclick = submitAnswer;
  }

  function submitAnswer() {
    if (answered[currentQuiz]) return;

    const qIdx = quizOrder[currentQuiz];
    const q = quizData[qIdx];
    const checked = quizForm.querySelector('input[name="answer"]:checked');
    if (!checked) {
      feedbackArea.textContent = "답을 선택해 주세요!";
      return;
    }
    const answer = parseInt(checked.value, 10);

    fetch('/save-quiz', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: userName,
        dept: userDept,
        question: q.question,
        userAnswer: q.options[answer],
        correct: q.options[q.correct],
        isCorrect: answer === q.correct ? "O" : "X",
        feedback: q.feedback[answer],
        userAnswerIdx: answer
      })
    });

    answered[currentQuiz] = true;
    quizForm.querySelectorAll('input[name="answer"]').forEach(el => el.disabled = true);
    document.getElementById('submitBtn').disabled = true;

    let isCorrect = answer === q.correct;
    if (isCorrect) {
      score += q.score;
      setCharacterVideo('correct');
      characterSpeech.textContent = "정답이야! 최고야!";
    } else {
      setCharacterVideo('wrong');
      characterSpeech.textContent = "앗, 틀렸어!";
    }
    feedbackArea.textContent = q.feedback[answer];

    userAnswers[currentQuiz] = {
      question: q.question,
      userAnswer: q.options[answer],
      userAnswerIdx: answer,
      correct: q.options[q.correct],
      isCorrect: isCorrect ? "O" : "X",
      feedback: q.feedback[answer],
      quizIdx: qIdx
    };

    if (currentQuiz < quizData.length - 1) {
      nextBtn.style.display = "inline-block";
      finishBtn.style.display = "none";
    } else {
      nextBtn.style.display = "none";
      finishBtn.style.display = "inline-block";
    }
  }

  nextBtn.onclick = function() {
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz(currentQuiz);
    }
  };

  finishBtn.onclick = function() {
    let answerArr = Array(quizData.length).fill("");
    userAnswers.forEach(ans => {
      if (ans && typeof ans.quizIdx === "number") {
        answerArr[ans.quizIdx] = (ans.userAnswerIdx + 1).toString();
      }
    });
    answerArr = answerArr.map(a => a || "0");

    quizContainer.innerHTML = `
      <div style="margin:80px 0 40px 0;font-size:22px;">
        퀴즈가 종료되었습니다.<br>
        <b>최종 점수: ${score}점 / ${quizData.reduce((a,b)=>a+b.score,0)}점</b><br>
        참여해주셔서 감사합니다!
      </div>
    `;
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
    });
  };
}
