const quizData = [
  {
    question: "식품등의 표시기준에서 ‘향미유’에 사용한 식용유지의 명칭을 표시할 때, ‘식용유지의 명칭’이 의미하는 것은 무엇인가?",
    score: 1.0,
    options: [
      "제품명",
      "식품유형명",
      "제조사명",
      "원산지"
    ],
    correct: 1,
    feedback: [
      "틀렸습니다. 해설: ‘식용유지의 명칭’은 「식품의 기준 및 규격」에 따른 식용유지류의 식품유형명을 의미합니다.",
      "정답입니다! 해설: ‘식용유지의 명칭’은 「식품의 기준 및 규격」에 따른 식용유지류의 식품유형명을 의미합니다.",
      "틀렸습니다. 해설: ‘식용유지의 명칭’은 「식품의 기준 및 규격」에 따른 식용유지류의 식품유형명을 의미합니다.",
      "틀렸습니다. 해설: ‘식용유지의 명칭’은 「식품의 기준 및 규격」에 따른 식용유지류의 식품유형명을 의미합니다."
    ]
  },
  {
    question: "행정예고 중인 「식품등의 표시기준」 개정안의 내용을 미리 선적용할 수 있는 경우는?",
    score: 1.2,
    options: [
      "언제든지 가능",
      "행정예고 중에도 가능",
      "고시가 최종 시행된 후에만 가능",
      "의견 제출 후 바로 가능"
    ],
    correct: 2,
    feedback: [
      "틀렸습니다. 해설: 행정예고 중인 개정안은 최종 고시 전까지 내용이 변경될 수 있으므로, 선적용은 고시가 시행된 후에만 가능합니다.",
      "틀렸습니다. 해설: 행정예고 중인 개정안은 최종 고시 전까지 내용이 변경될 수 있으므로, 선적용은 고시가 시행된 후에만 가능합니다.",
      "정답입니다! 해설: 행정예고 중인 개정안은 최종 고시 전까지 내용이 변경될 수 있으므로, 선적용은 고시가 시행된 후에만 가능합니다.",
      "틀렸습니다. 해설: 행정예고 중인 개정안은 최종 고시 전까지 내용이 변경될 수 있으므로, 선적용은 고시가 시행된 후에만 가능합니다."
    ]
  },
  {
    question: "냉동농산물의 섭취방법 표시(가열/비가열 섭취)는 어떤 기준에 따라 표시해야 하는가?",
    score: 1.5,
    options: [
      "임의로 표시",
      "식품등의 표시기준",
      "소비자 요구",
      "제조사 내부 규정"
    ],
    correct: 1,
    feedback: [
      "틀렸습니다. 해설: 냉동농산물의 섭취방법(가열/비가열)은 식품등의 표시기준에 따라 표시해야 합니다.",
      "정답입니다! 해설: 냉동농산물의 섭취방법(가열/비가열)은 식품등의 표시기준에 따라 표시해야 합니다.",
      "틀렸습니다. 해설: 냉동농산물의 섭취방법(가열/비가열)은 식품등의 표시기준에 따라 표시해야 합니다.",
      "틀렸습니다. 해설: 냉동농산물의 섭취방법(가열/비가열)은 식품등의 표시기준에 따라 표시해야 합니다."
    ]
  },
  {
    question: "식품 표시사항의 글씨 크기(포인트)는 어디에 명확히 규정되어 있는가?",
    score: 1.5,
    options: [
      "식품위생법",
      "식품등의 표시기준",
      "소비자기본법",
      "영업자 자율규정"
    ],
    correct: 1,
    feedback: [
      "틀렸습니다. 해설: 식품 표시사항의 글씨 크기는 식품등의 표시기준에 명확히 규정되어 있습니다.",
      "정답입니다! 해설: 식품 표시사항의 글씨 크기는 식품등의 표시기준에 명확히 규정되어 있습니다.",
      "틀렸습니다. 해설: 식품 표시사항의 글씨 크기는 식품등의 표시기준에 명확히 규정되어 있습니다.",
      "틀렸습니다. 해설: 식품 표시사항의 글씨 크기는 식품등의 표시기준에 명확히 규정되어 있습니다."
    ]
  },
  {
    question: "어린이 기호식품을 조리·판매하는 식품접객업소의 영양성분 및 알레르기 유발물질 표시 의무는 어떤 조건에서 발생하는가?",
    score: 1.8,
    options: [
      "모든 식품접객업소",
      "점포수 10개 이상",
      "가맹사업이며 점포수 50개 이상",
      "프랜차이즈 여부와 무관"
    ],
    correct: 2,
    feedback: [
      "틀렸습니다. 해설: 어린이 기호식품을 조리·판매하는 업소 중 가맹사업의 직영점과 가맹점을 포함한 점포수가 50개 이상인 경우에 표시 의무가 있습니다.",
      "틀렸습니다. 해설: 어린이 기호식품을 조리·판매하는 업소 중 가맹사업의 직영점과 가맹점을 포함한 점포수가 50개 이상인 경우에 표시 의무가 있습니다.",
      "정답입니다! 해설: 어린이 기호식품을 조리·판매하는 업소 중 가맹사업의 직영점과 가맹점을 포함한 점포수가 50개 이상인 경우에 표시 의무가 있습니다.",
      "틀렸습니다. 해설: 어린이 기호식품을 조리·판매하는 업소 중 가맹사업의 직영점과 가맹점을 포함한 점포수가 50개 이상인 경우에 표시 의무가 있습니다."
    ]
  },
  {
    question: "GMO(유전자변형식품) 표시 면제 요건에 해당하지 않는 것은?",
    score: 2.0,
    options: [
      "원재료가 DNA 또는 단백질이 남아있지 않은 경우",
      "대두레시틴 등 가공 후 DNA가 검출되지 않는 경우",
      "모든 수입식품",
      "산화방지제 등 미량 첨가물"
    ],
    correct: 2,
    feedback: [
      "틀렸습니다. 해설: GMO 표시 면제는 DNA 또는 단백질이 남아있지 않은 경우 등이며, 모든 수입식품이 면제되는 것은 아닙니다.",
      "틀렸습니다. 해설: GMO 표시 면제는 DNA 또는 단백질이 남아있지 않은 경우 등이며, 모든 수입식품이 면제되는 것은 아닙니다.",
      "정답입니다! 해설: GMO 표시 면제는 DNA 또는 단백질이 남아있지 않은 경우 등이며, 모든 수입식품이 면제되는 것은 아닙니다.",
      "틀렸습니다. 해설: GMO 표시 면제는 DNA 또는 단백질이 남아있지 않은 경우 등이며, 모든 수입식품이 면제되는 것은 아닙니다."
    ]
  },
  {
    question: "복합원재료에 GMO 원료가 포함된 경우 표시방법으로 옳은 것은?",
    score: 2.0,
    options: [
      "복합원재료명만 표시",
      "GMO 원재료명을 괄호 안에 표시",
      "별도의 표기 불필요",
      "제조사명만 표시"
    ],
    correct: 1,
    feedback: [
      "틀렸습니다. 해설: 복합원재료에 GMO 원료가 포함된 경우, 해당 원재료명을 괄호 안에 표시해야 합니다.",
      "정답입니다! 해설: 복합원재료에 GMO 원료가 포함된 경우, 해당 원재료명을 괄호 안에 표시해야 합니다.",
      "틀렸습니다. 해설: 복합원재료에 GMO 원료가 포함된 경우, 해당 원재료명을 괄호 안에 표시해야 합니다.",
      "틀렸습니다. 해설: 복합원재료에 GMO 원료가 포함된 경우, 해당 원재료명을 괄호 안에 표시해야 합니다."
    ]
  },
  {
    question: "식품 표시기준상 외국어 로고나 상표의 글씨 크기 규정은 어디에 적용되는가?",
    score: 1.7,
    options: [
      "모든 표시사항",
      "주표시면에만",
      "광고 문구에만",
      "제품설명에만"
    ],
    correct: 1,
    feedback: [
      "틀렸습니다. 해설: 외국어 로고나 상표의 글씨 크기 규정은 주표시면에 적용됩니다.",
      "정답입니다! 해설: 외국어 로고나 상표의 글씨 크기 규정은 주표시면에 적용됩니다.",
      "틀렸습니다. 해설: 외국어 로고나 상표의 글씨 크기 규정은 주표시면에 적용됩니다.",
      "틀렸습니다. 해설: 외국어 로고나 상표의 글씨 크기 규정은 주표시면에 적용됩니다."
    ]
  },
  {
    question: "식품 표시기준에서 ‘주표시면’이란 무엇을 의미하는가?",
    score: 1.9,
    options: [
      "제품의 뒷면",
      "소비자가 가장 먼저 인식하는 면",
      "바닥면",
      "포장 내부"
    ],
    correct: 1,
    feedback: [
      "틀렸습니다. 해설: 주표시면은 소비자가 제품을 볼 때 가장 먼저 인식하는 면을 의미합니다.",
      "정답입니다! 해설: 주표시면은 소비자가 제품을 볼 때 가장 먼저 인식하는 면을 의미합니다.",
      "틀렸습니다. 해설: 주표시면은 소비자가 제품을 볼 때 가장 먼저 인식하는 면을 의미합니다.",
      "틀렸습니다. 해설: 주표시면은 소비자가 제품을 볼 때 가장 먼저 인식하는 면을 의미합니다."
    ]
  },
  {
    question: "GMO 표시대상 원재료에 해당하지 않는 것은?",
    score: 2.2,
    options: [
      "콩",
      "옥수수",
      "말토덱스트린",
      "유채"
    ],
    correct: 2,
    feedback: [
      "틀렸습니다. 해설: 말토덱스트린은 가공과정에서 DNA나 단백질이 남지 않아 GMO 표시대상 원재료에 해당하지 않습니다.",
      "틀렸습니다. 해설: 말토덱스트린은 가공과정에서 DNA나 단백질이 남지 않아 GMO 표시대상 원재료에 해당하지 않습니다.",
      "정답입니다! 해설: 말토덱스트린은 가공과정에서 DNA나 단백질이 남지 않아 GMO 표시대상 원재료에 해당하지 않습니다.",
      "틀렸습니다. 해설: 말토덱스트린은 가공과정에서 DNA나 단백질이 남지 않아 GMO 표시대상 원재료에 해당하지 않습니다."
    ]
  },
  {
    question: "식품 표시기준 개정 시, 이미 제조·가공 또는 수입된 식품에 대해 개정된 기준을 적용할 수 있는 경우는?",
    score: 2.3,
    options: [
      "반드시 기존 기준만 적용",
      "개정 고시 시행 전에는 불가",
      "희망 시 개정 기준 적용 가능",
      "수입식품만 적용"
    ],
    correct: 2,
    feedback: [
      "틀렸습니다. 해설: 고시 시행 전에 이미 제조·가공 또는 수입된 식품도 희망 시 개정 기준을 적용할 수 있습니다.",
      "틀렸습니다. 해설: 고시 시행 전에 이미 제조·가공 또는 수입된 식품도 희망 시 개정 기준을 적용할 수 있습니다.",
      "정답입니다! 해설: 고시 시행 전에 이미 제조·가공 또는 수입된 식품도 희망 시 개정 기준을 적용할 수 있습니다.",
      "틀렸습니다. 해설: 고시 시행 전에 이미 제조·가공 또는 수입된 식품도 희망 시 개정 기준을 적용할 수 있습니다."
    ]
  },
  {
    question: "식품 표시기준상 ‘향미유’의 배합비율(백분율) 표시는 어떤 순서로 해야 하는가?",
    score: 2.5,
    options: [
      "임의 순서",
      "함량순위",
      "알파벳순",
      "제조일자순"
    ],
    correct: 1,
    feedback: [
      "틀렸습니다. 해설: 향미유는 사용한 식용유지의 명칭 및 배합비율을 함량순위에 따라 표시해야 합니다.",
      "정답입니다! 해설: 향미유는 사용한 식용유지의 명칭 및 배합비율을 함량순위에 따라 표시해야 합니다.",
      "틀렸습니다. 해설: 향미유는 사용한 식용유지의 명칭 및 배합비율을 함량순위에 따라 표시해야 합니다.",
      "틀렸습니다. 해설: 향미유는 사용한 식용유지의 명칭 및 배합비율을 함량순위에 따라 표시해야 합니다."
    ]
  },
  {
    question: "식품 표시기준에서 ‘추가 문구 및 제품설명’의 글씨 크기 규정은 어디에 적용되는가?",
    score: 2.7,
    options: [
      "주표시면",
      "광고지",
      "제품설명서",
      "모든 표시사항"
    ],
    correct: 0,
    feedback: [
      "정답입니다! 해설: 추가 문구 및 제품설명의 글씨 크기 규정은 주표시면에 적용됩니다.",
      "틀렸습니다. 해설: 추가 문구 및 제품설명의 글씨 크기 규정은 주표시면에 적용됩니다.",
      "틀렸습니다. 해설: 추가 문구 및 제품설명의 글씨 크기 규정은 주표시면에 적용됩니다.",
      "틀렸습니다. 해설: 추가 문구 및 제품설명의 글씨 크기 규정은 주표시면에 적용됩니다."
    ]
  },
  {
    question: "식품 표시기준상 냉동식품의 섭취방법(가열/비가열) 표시가 필요한 이유는?",
    score: 2.8,
    options: [
      "소비자 혼동 방지",
      "제조사 홍보",
      "수출입 통계",
      "영업자 편의"
    ],
    correct: 0,
    feedback: [
      "정답입니다! 해설: 냉동식품의 섭취방법 표시를 통해 소비자가 올바르게 섭취할 수 있도록 하여 혼동을 방지합니다.",
      "틀렸습니다. 해설: 냉동식품의 섭취방법 표시를 통해 소비자가 올바르게 섭취할 수 있도록 하여 혼동을 방지합니다.",
      "틀렸습니다. 해설: 냉동식품의 섭취방법 표시를 통해 소비자가 올바르게 섭취할 수 있도록 하여 혼동을 방지합니다.",
      "틀렸습니다. 해설: 냉동식품의 섭취방법 표시를 통해 소비자가 올바르게 섭취할 수 있도록 하여 혼동을 방지합니다."
    ]
  },
  {
    question: "GMO 표시 면제 요건에 해당하는 대두레시틴과 산화방지제의 공통점은?",
    score: 3.0,
    options: [
      "모두 수입식품",
      "가공 후 DNA 또는 단백질이 남지 않음",
      "원산지 표시 의무",
      "알레르기 유발물질"
    ],
    correct: 1,
    feedback: [
      "틀렸습니다. 해설: 대두레시틴과 산화방지제는 가공 후 DNA 또는 단백질이 남지 않아 GMO 표시가 면제됩니다.",
      "정답입니다! 해설: 대두레시틴과 산화방지제는 가공 후 DNA 또는 단백질이 남지 않아 GMO 표시가 면제됩니다.",
      "틀렸습니다. 해설: 대두레시틴과 산화방지제는 가공 후 DNA 또는 단백질이 남지 않아 GMO 표시가 면제됩니다.",
      "틀렸습니다. 해설: 대두레시틴과 산화방지제는 가공 후 DNA 또는 단백질이 남지 않아 GMO 표시가 면제됩니다."
    ]
  }
];
// quizData는 위에서 정의한 것을 사용
// quizData는 위에서 제공한 것을 사용

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

    // 서버에 결과 저장 (문제별 저장은 서버에서 무시)
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
};
