// AI 캐릭터 영상 파일명 (기본, 정답, 오답)
const characterVideos = {
  normal: "ai_normal.mp4",
  correct: "ai_happy.mp4",
  wrong: "ai_sad.mp4"
};

// 문제 데이터 (여러 문제 확장 가능)
const quizData = [
  {
    question: "Q. 2 + 2 = ?",
    options: ["3", "4", "5"],
    correct: 1, // 0부터 시작 (정답: 4)
    feedback: [
      "앗, 다시 생각해봐!",
      "정답이야! 잘했어!",
      "아쉽지만 틀렸어!"
    ]
  },
  {
    question: "Q. 대한민국의 수도는?",
    options: ["서울", "부산", "대전"],
    correct: 0,
    feedback: [
      "정답이야! 잘했어!",
      "아쉽지만 틀렸어!",
      "앗, 다시 생각해봐!"
    ]
  }
  // 문제를 더 추가하려면 이 배열에 객체를 추가하면 됩니다.
];

let currentQuiz = 0;
let userName = "";
let userDept = "";
let answered = []; // 각 문제별로 제출 여부

window.onload = function() {
  const userInfoArea = document.getElementById('userInfoArea');
  const userNameInput = document.getElementById('userName');
  const userDeptInput = document.getElementById('userDept');
  const userInfoBtn = document.getElementById('userInfoBtn');
  const startBtn = document.getElementById('startBtn');
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
    startBtn.style.display = "block";
  };

  function setCharacterVideo(type) {
    characterVideo.pause();
    characterVideo.querySelector('source').src = characterVideos[type];
    characterVideo.load();
    characterVideo.play();
  }

  function loadQuiz(idx) {
    const q = quizData[idx];
    setCharacterVideo('normal');
    characterSpeech.textContent = "문제를 맞춰봐!";
    questionText.textContent = q.question;
    // 객관식 옵션 생성
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
    if (answered[currentQuiz]) return; // 이미 제출했으면 무시

    const q = quizData[currentQuiz];
    const checked = quizForm.querySelector('input[name="answer"]:checked');
    if (!checked) {
      feedbackArea.textContent = "답을 선택해 주세요!";
      return;
    }
    const answer = parseInt(checked.value, 10);

    // 서버에 결과 저장
    fetch('/save-quiz', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: userName,
        dept: userDept,
        question: q.question,
        userAnswer: q.options[answer],
        correct: q.options[q.correct],
        isCorrect: answer === q.correct ? "O" : "X"
      })
    })
    .then(res => res.json())
    .then(data => {
      if (data.ok) {
        answered[currentQuiz] = true;
        // 제출 후 라디오, 버튼 비활성화
        quizForm.querySelectorAll('input[name="answer"]').forEach(el => el.disabled = true);
        document.getElementById('submitBtn').disabled = true;

        if (answer === q.correct) {
          setCharacterVideo('correct');
          characterSpeech.textContent = "정답이야! 최고야!";
          feedbackArea.textContent = q.feedback[answer];
        } else {
          setCharacterVideo('wrong');
          characterSpeech.textContent = "앗, 틀렸어!";
          feedbackArea.textContent = q.feedback[answer];
        }
        // 마지막 문제면 종료하기 버튼, 아니면 다음 문제 버튼
        if (currentQuiz < quizData.length - 1) {
          nextBtn.style.display = "inline-block";
          finishBtn.style.display = "none";
        } else {
          nextBtn.style.display = "none";
          finishBtn.style.display = "inline-block";
        }
      } else {
        feedbackArea.textContent = data.msg || "이미 제출한 문제입니다.";
        // 이미 제출한 경우에도 라디오, 버튼 비활성화
        quizForm.querySelectorAll('input[name="answer"]').forEach(el => el.disabled = true);
        document.getElementById('submitBtn').disabled = true;
        if (currentQuiz < quizData.length - 1) {
          nextBtn.style.display = "inline-block";
          finishBtn.style.display = "none";
        } else {
          nextBtn.style.display = "none";
          finishBtn.style.display = "inline-block";
        }
      }
    });
  }

  nextBtn.onclick = function() {
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz(currentQuiz);
    }
  };

  finishBtn.onclick = function() {
    // 종료 메시지 및 초기화
    quizContainer.innerHTML = `
      <div style="margin:80px 0 40px 0;font-size:22px;">퀴즈가 종료되었습니다.<br>참여해주셔서 감사합니다!</div>
    `;
  };

  // 시작하기 버튼 클릭 시 퀴즈 시작
  startBtn.onclick = function() {
    startBtn.style.display = "none";
    quizContainer.style.display = "block";
    currentQuiz = 0;
    answered = [];
    loadQuiz(currentQuiz);
  };
};
