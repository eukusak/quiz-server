// 문제 데이터 (10문제, 각 10점, 해설 포함)
const quizData = [
  {
    question: "식품위생법 제41조에 따라 영업자가 매년 받아야 하는 교육은 무엇인가요?",
    options: [
      "영양교육",
      "식품위생교육",
      "안전관리교육",
      "고객응대교육"
    ],
    correct: 1,
    feedback: [
      "틀렸습니다. 해설: 식품위생법 제41조에 따라 영업자는 매년 식품위생교육을 받아야 합니다.",
      "정답입니다! 해설: 식품위생법 제41조에 따라 영업자는 매년 식품위생교육을 받아야 합니다.",
      "틀렸습니다. 해설: 식품위생법 제41조에 따라 영업자는 매년 식품위생교육을 받아야 합니다.",
      "틀렸습니다. 해설: 식품위생법 제41조에 따라 영업자는 매년 식품위생교육을 받아야 합니다."
    ]
  },
  {
    question: "식품위생관리책임자가 A매장에서 B매장으로 인사이동한 경우, 위생교육을 다시 받아야 하나요?",
    options: [
      "반드시 다시 받아야 한다",
      "받을 필요 없다",
      "새로운 책임자가 교육을 받지 않았다면 교육받을 것을 권고",
      "3년마다 한 번만 받으면 된다"
    ],
    correct: 1,
    feedback: [
      "틀렸습니다. 해설: 동일 영업자가 인사이동한 경우, 이미 교육을 이수했다면 다시 받을 필요는 없습니다.",
      "정답입니다! 해설: 동일 영업자가 인사이동한 경우, 이미 교육을 이수했다면 다시 받을 필요는 없습니다.",
      "틀렸습니다. 해설: 동일 영업자가 인사이동한 경우, 이미 교육을 이수했다면 다시 받을 필요는 없습니다.",
      "틀렸습니다. 해설: 동일 영업자가 인사이동한 경우, 이미 교육을 이수했다면 다시 받을 필요는 없습니다."
    ]
  },
  {
    question: "식품위생법 제45조에 따라 위해식품 회수의무가 있는 영업자에 해당하지 않는 업종은?",
    options: [
      "식품제조·가공업자",
      "식품첨가물제조업자",
      "도매업, 소매업, 통신판매업",
      "수입식품등 수입·판매업자"
    ],
    correct: 2,
    feedback: [
      "틀렸습니다. 해설: 회수의무는 식품제조·가공업자, 식품첨가물제조업자, 수입식품등 수입·판매업자 등에게 해당하며, 도매업, 소매업, 통신판매업자는 직접 회수의무가 없습니다.",
      "틀렸습니다. 해설: 회수의무는 식품제조·가공업자, 식품첨가물제조업자, 수입식품등 수입·판매업자 등에게 해당하며, 도매업, 소매업, 통신판매업자는 직접 회수의무가 없습니다.",
      "정답입니다! 해설: 회수의무는 식품제조·가공업자, 식품첨가물제조업자, 수입식품등 수입·판매업자 등에게 해당하며, 도매업, 소매업, 통신판매업자는 직접 회수의무가 없습니다.",
      "틀렸습니다. 해설: 회수의무는 식품제조·가공업자, 식품첨가물제조업자, 수입식품등 수입·판매업자 등에게 해당하며, 도매업, 소매업, 통신판매업자는 직접 회수의무가 없습니다."
    ]
  },
  {
    question: "위해식품 회수와 관련하여 도매업, 소매업, 통신판매업자가 해야 할 일은?",
    options: [
      "아무런 조치 필요 없음",
      "회수 영업자의 회수사실 통지 시 적극 협조",
      "직접 회수 의무",
      "신고만 하면 됨"
    ],
    correct: 1,
    feedback: [
      "틀렸습니다. 해설: 회수의무는 없으나, 회수 영업자가 회수사실을 통지하면 적극적으로 협조해야 합니다.",
      "정답입니다! 해설: 회수의무는 없으나, 회수 영업자가 회수사실을 통지하면 적극적으로 협조해야 합니다.",
      "틀렸습니다. 해설: 회수의무는 없으나, 회수 영업자가 회수사실을 통지하면 적극적으로 협조해야 합니다.",
      "틀렸습니다. 해설: 회수의무는 없으나, 회수 영업자가 회수사실을 통지하면 적극적으로 협조해야 합니다."
    ]
  },
  {
    question: "식품위생법상 식품위생교육을 대신 받을 수 있는 사람은?",
    options: [
      "영업자 본인만",
      "종업원 중 식품위생에 관한 책임자로 지정된 자",
      "외부 컨설턴트",
      "고객"
    ],
    correct: 1,
    feedback: [
      "틀렸습니다. 해설: 영업자 본인이 직접 받지 못할 경우, 식품위생에 관한 책임자로 지정된 종업원이 대신 받을 수 있습니다.",
      "정답입니다! 해설: 영업자 본인이 직접 받지 못할 경우, 식품위생에 관한 책임자로 지정된 종업원이 대신 받을 수 있습니다.",
      "틀렸습니다. 해설: 영업자 본인이 직접 받지 못할 경우, 식품위생에 관한 책임자로 지정된 종업원이 대신 받을 수 있습니다.",
      "틀렸습니다. 해설: 영업자 본인이 직접 받지 못할 경우, 식품위생에 관한 책임자로 지정된 종업원이 대신 받을 수 있습니다."
    ]
  },
  {
    question: "식품위생법 제45조에 따라 회수조치가 필요한 경우는?",
    options: [
      "식품이 품질이 좋을 때",
      "식품이 법령을 위반한 사실을 알게 된 경우",
      "식품이 잘 팔릴 때",
      "식품이 수입된 경우"
    ],
    correct: 1,
    feedback: [
      "틀렸습니다. 해설: 식품이 법령을 위반하거나 위해가 발생할 우려가 있을 때 회수조치가 필요합니다.",
      "정답입니다! 해설: 식품이 법령을 위반하거나 위해가 발생할 우려가 있을 때 회수조치가 필요합니다.",
      "틀렸습니다. 해설: 식품이 법령을 위반하거나 위해가 발생할 우려가 있을 때 회수조치가 필요합니다.",
      "틀렸습니다. 해설: 식품이 법령을 위반하거나 위해가 발생할 우려가 있을 때 회수조치가 필요합니다."
    ]
  },
  {
    question: "식품위생법상 영업자가 두 곳 이상의 장소에서 영업할 때 교육을 받을 수 있는 방법은?",
    options: [
      "각 매장별로 모두 영업자가 직접",
      "한 명의 식품위생관리책임자를 지정하여 대신 교육",
      "교육을 받지 않아도 됨",
      "온라인 교육만 가능"
    ],
    correct: 1,
    feedback: [
      "틀렸습니다. 해설: 각 영업장별로 식품위생관리책임자를 지정하여 교육을 받을 수 있습니다.",
      "정답입니다! 해설: 각 영업장별로 식품위생관리책임자를 지정하여 교육을 받을 수 있습니다.",
      "틀렸습니다. 해설: 각 영업장별로 식품위생관리책임자를 지정하여 교육을 받을 수 있습니다.",
      "틀렸습니다. 해설: 각 영업장별로 식품위생관리책임자를 지정하여 교육을 받을 수 있습니다."
    ]
  },
  {
    question: "식품위생법 제41조에 따라 식품위생교육을 받지 않은 새로운 책임자가 있을 때 권고되는 조치는?",
    options: [
      "무시해도 된다",
      "교육받을 것을 권고",
      "벌금 부과",
      "영업정지"
    ],
    correct: 1,
    feedback: [
      "틀렸습니다. 해설: 새로운 책임자가 교육을 받지 않았다면 교육받을 것을 권고합니다.",
      "정답입니다! 해설: 새로운 책임자가 교육을 받지 않았다면 교육받을 것을 권고합니다.",
      "틀렸습니다. 해설: 새로운 책임자가 교육을 받지 않았다면 교육받을 것을 권고합니다.",
      "틀렸습니다. 해설: 새로운 책임자가 교육을 받지 않았다면 교육받을 것을 권고합니다."
    ]
  },
  {
    question: "위해식품 회수와 관련하여 회수 영업자의 회수사실을 통지받은 도매업자는 어떻게 해야 하나요?",
    options: [
      "판매를 계속한다",
      "신속히 회수에 협조",
      "신고만 한다",
      "아무 조치도 하지 않는다"
    ],
    correct: 1,
    feedback: [
      "틀렸습니다. 해설: 회수 영업자가 회수사실을 통지하면 도매업자는 신속히 회수에 협조해야 합니다.",
      "정답입니다! 해설: 회수 영업자가 회수사실을 통지하면 도매업자는 신속히 회수에 협조해야 합니다.",
      "틀렸습니다. 해설: 회수 영업자가 회수사실을 통지하면 도매업자는 신속히 회수에 협조해야 합니다.",
      "틀렸습니다. 해설: 회수 영업자가 회수사실을 통지하면 도매업자는 신속히 회수에 협조해야 합니다."
    ]
  },
  {
    question: "식품위생법상 식품위생교육의 목적은 무엇인가요?",
    options: [
      "영업장의 위생관리",
      "매출 증대",
      "고객 서비스 향상",
      "광고 효과"
    ],
    correct: 0,
    feedback: [
      "정답입니다! 해설: 식품위생교육의 목적은 영업장의 위생관리를 철저히 하여 식품안전을 확보하는 것입니다.",
      "틀렸습니다. 해설: 식품위생교육의 목적은 영업장의 위생관리를 철저히 하여 식품안전을 확보하는 것입니다.",
      "틀렸습니다. 해설: 식품위생교육의 목적은 영업장의 위생관리를 철저히 하여 식품안전을 확보하는 것입니다.",
      "틀렸습니다. 해설: 식품위생교육의 목적은 영업장의 위생관리를 철저히 하여 식품안전을 확보하는 것입니다."
    ]
  }
];

// 캐릭터 영상 파일명 (기본, 정답, 오답)
const characterVideos = {
  normal: "ai_normal.mp4",
  correct: "ai_happy.mp4",
  wrong: "ai_sad.mp4"
};

// 랜덤 문제 순서 생성
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
    questionText.textContent = `(${idx+1}/${quizData.length}) ${q.question}`;
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

    const qIdx = quizOrder[currentQuiz];
    const q = quizData[qIdx];
    const checked = quizForm.querySelector('input[name="answer"]:checked');
    if (!checked) {
      feedbackArea.textContent = "답을 선택해 주세요!";
      return;
    }
    const answer = parseInt(checked.value, 10);

    // 서버에 결과 저장 (feedback도 함께 전송)
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
        feedback: q.feedback[answer]
      })
    });

    answered[currentQuiz] = true;
    // 제출 후 라디오, 버튼 비활성화
    quizForm.querySelectorAll('input[name="answer"]').forEach(el => el.disabled = true);
    document.getElementById('submitBtn').disabled = true;

    // 점수 계산 및 해설 저장
    let isCorrect = answer === q.correct;
    if (isCorrect) {
      score += 10;
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
      correct: q.options[q.correct],
      isCorrect: isCorrect ? "O" : "X",
      feedback: q.feedback[answer]
    };

    // 마지막 문제면 종료하기 버튼, 아니면 다음 문제 버튼
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
    // 종료 메시지 및 최종 점수 표시
    quizContainer.innerHTML = `
      <div style="margin:80px 0 40px 0;font-size:22px;">
        퀴즈가 종료되었습니다.<br>
        <b>최종 점수: ${score}점 / ${quizData.length * 10}점</b><br>
        참여해주셔서 감사합니다!
      </div>
    `;
    // 서버에 최종 점수 저장 (엑셀에 포함)
    fetch('/save-quiz', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        name: userName,
        dept: userDept,
        question: "[최종점수]",
        userAnswer: `${score}`,
        correct: `${quizData.length * 10}`,
        isCorrect: "",
        feedback: ""
      })
    });
  };
};
