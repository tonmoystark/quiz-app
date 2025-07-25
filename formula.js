let selectedAnswer = null;
let currentCard = null;
let currentQuizType = null;
let themeBtn = document.querySelector('.toggle-input');
let body = document.querySelector('body');
let boxes = document.querySelectorAll('.boxes');
let pTags = document.querySelectorAll('.left p');
let navBar = document.querySelector('nav');
let h1 = document.querySelector('h1');
let cards = document.querySelectorAll('.cards');
let selectionBtns = document.querySelectorAll('.selection');
let mainBox = document.querySelector('.boxes');
let topic = document.querySelector('.topic');
let count = 1;
let resultCount = 0;
let meter1 = document.querySelectorAll('.meter1');
let resultBox = document.querySelector('.resultBox');
let resultMeter = document.querySelector('.result');
let totalPoint = document.querySelector('.total-point');

// Questions data
let htmlQuestions = [];
let cssQuestions = [];
let javascriptQuestions = [];
let sassQuestions = [];

// Fetch questions
async function fetchQuestions() {
    try {
        const [htmlRes, cssRes, jsRes, sassRes] = await Promise.all([
            fetch('./htmlquestions.json'),
            fetch('./cssquestions.json'),
            fetch('./jsquestions.json'),
            fetch('./sassquestions.json')
        ]);

        htmlQuestions = await htmlRes.json();
        cssQuestions = await cssRes.json();
        javascriptQuestions = await jsRes.json();
        sassQuestions = await sassRes.json();
        
    } catch (error) {
        console.error('There is some error bro', error);
    }
}


fetchQuestions().then(() => {
    // Theme change
    themeBtn.addEventListener('click', () => {
        body.classList.toggle('body-dark');
        navBar.classList.toggle('boxes-dark');
        resultBox.classList.toggle('boxes-dark');
        boxes.forEach(box => {
            box.classList.toggle('boxes-dark');
        });
        pTags.forEach(pTag => {
            if (body.classList.contains('body-dark')) {
                pTag.style.color = 'white';
                h1.style.color = 'white';
            } else {
                pTag.style.color = 'black';
                h1.style.color = 'black';
            }
        });
    });

    //submit buttons
    document.querySelectorAll('.submitBtn').forEach(btn => {
        btn.addEventListener('click', handleSubmit);
    });

    //selection buttons
    selectionBtns.forEach(selectionBtn => {
        let img = document.createElement('img');
        let p = document.createElement('p');
        selectionBtn.addEventListener('click', () => {
            cards.forEach(card => {
                card.classList.add('no-view');
            });
            mainBox.classList.add('no-view');
            navBar.classList.remove('justify-end');
            navBar.classList.add('justify-space');
            topic.classList.remove('topic-disable');
            const buttonText = selectionBtn.querySelector('p').textContent;
            let cardToShow;
            if (buttonText === 'HTML') {
                cardToShow = document.querySelector('.html').classList.remove('no-view');
                img.src = './svgs/html-icon.svg';
                p.textContent = buttonText;
                topic.appendChild(img);
                topic.appendChild(p);
                currentQuizType = 'html';
                html();
            } else if (buttonText === 'CSS') {
                cardToShow = document.querySelector('.css').classList.remove('no-view');
                img.src = './svgs/css-icon.svg';
                p.textContent = buttonText;
                topic.appendChild(img);
                topic.appendChild(p);
                currentQuizType = 'css';
                css();
            } else if (buttonText === 'JavaScript') {
                cardToShow = document.querySelector('.javascript').classList.remove('no-view');
                img.src = './svgs/javascript-icon.svg';
                p.textContent = buttonText;
                topic.appendChild(img);
                topic.appendChild(p);
                currentQuizType = 'javascript';
                javascript();
            } else if (buttonText === 'SASS') {
                cardToShow = document.querySelector('.sass').classList.remove('no-view');
                img.src = './svgs/sass-icon.svg';
                p.textContent = buttonText;
                topic.appendChild(img);
                topic.appendChild(p);
                currentQuizType = 'sass';
                sass();
            }
        });
    });
});

// Quiz functions
function html() {
    const questionElement = document.querySelector('.html .hero .left h3');
    const optionElements = document.querySelectorAll('.html .hero .right button:not(.submitBtn)');

    const randomIndex = Math.floor(Math.random() * htmlQuestions.length);
    const randomQuestion = htmlQuestions[randomIndex];
    console.log(randomQuestion);
    console.log(randomIndex);
    questionElement.textContent = randomQuestion.question;

    optionElements.forEach((optionElement, index) => {
        const pTag = optionElement.querySelector('p');
        pTag.textContent = randomQuestion.options[index];
        optionElement.classList.remove('selected');
    });

    currentCard = document.querySelector('.html');
    currentCard.dataset.correctAnswer = randomQuestion.answer;
    
    optionElements.forEach(optionElement => {
        optionElement.addEventListener('click', () => {
            optionElements.forEach(opt => opt.classList.remove('selected'));
            optionElement.classList.add('selected');
            selectedAnswer = optionElement.querySelector('p').textContent;
        });
    });
}

function css() {
    const questionElement = document.querySelector('.css .hero .left h3');
    const optionElements = document.querySelectorAll('.css .hero .right button:not(.submitBtn)');

    const randomIndex = Math.floor(Math.random() * cssQuestions.length);
    const randomQuestion = cssQuestions[randomIndex];
    console.log(randomQuestion);
    console.log(randomIndex);
    questionElement.textContent = randomQuestion.question;

    optionElements.forEach((optionElement, index) => {
        const pTag = optionElement.querySelector('p');
        pTag.textContent = randomQuestion.options[index];
        optionElement.classList.remove('selected');
    });

    currentCard = document.querySelector('.css');
    currentCard.dataset.correctAnswer = randomQuestion.answer;
    
    optionElements.forEach(optionElement => {
        optionElement.addEventListener('click', () => {
            optionElements.forEach(opt => opt.classList.remove('selected'));
            optionElement.classList.add('selected');
            selectedAnswer = optionElement.querySelector('p').textContent;
        });
    });
}

function javascript() {
    const questionElement = document.querySelector('.javascript .hero .left h3');
    const optionElements = document.querySelectorAll('.javascript .hero .right button:not(.submitBtn)');

    const randomIndex = Math.floor(Math.random() * javascriptQuestions.length);
    const randomQuestion = javascriptQuestions[randomIndex];
    console.log(randomQuestion);
    console.log(randomIndex);
    questionElement.textContent = randomQuestion.question;

    optionElements.forEach((optionElement, index) => {
        const pTag = optionElement.querySelector('p');
        pTag.textContent = randomQuestion.options[index];
        optionElement.classList.remove('selected');
    });

    currentCard = document.querySelector('.javascript');
    currentCard.dataset.correctAnswer = randomQuestion.answer;
    
    optionElements.forEach(optionElement => {
        optionElement.addEventListener('click', () => {
            optionElements.forEach(opt => opt.classList.remove('selected'));
            optionElement.classList.add('selected');
            selectedAnswer = optionElement.querySelector('p').textContent;
        });
    });
}

function sass() {
    const questionElement = document.querySelector('.sass .hero .left h3');
    const optionElements = document.querySelectorAll('.sass .hero .right button:not(.submitBtn)');

    const randomIndex = Math.floor(Math.random() * sassQuestions.length);
    const randomQuestion = sassQuestions[randomIndex];
    console.log(randomQuestion);
    console.log(randomIndex);
    questionElement.textContent = randomQuestion.question;

    optionElements.forEach((optionElement, index) => {
        const pTag = optionElement.querySelector('p');
        pTag.textContent = randomQuestion.options[index];
        optionElement.classList.remove('selected');
    });

    currentCard = document.querySelector('.sass');
    currentCard.dataset.correctAnswer = randomQuestion.answer;
    
    optionElements.forEach(optionElement => {
        optionElement.addEventListener('click', () => {
            optionElements.forEach(opt => opt.classList.remove('selected'));
            optionElement.classList.add('selected');
            selectedAnswer = optionElement.querySelector('p').textContent;
        });
    });
}

function handleSubmit() {
    if (!selectedAnswer) {
        alert('Please select an answer');
        return;
    }

    const correctAnswer = currentCard.dataset.correctAnswer;
    if (selectedAnswer === correctAnswer) {
        resultCount++;
    }
    count++;


    meter1.forEach(meter => {
        meter.value = count;
    });
    
    let countings = document.querySelectorAll('.left p span');
    countings.forEach(counting => {
        if (count < 10) {
            counting.textContent = count;
        } else {
            counting.textContent = 10;
        }
    });
    
    
    selectedAnswer = null;
    
    if (count < 10) {
        if (currentQuizType === 'html') {
            html();
        } else if (currentQuizType === 'css') {
            css();
        } else if (currentQuizType === 'javascript') {
            javascript();
        } else if (currentQuizType === 'sass') {
            sass();
        }
    } else {
        boxes.forEach(box => {
            box.classList.add('vanish');
        });
        resultBox.classList.remove('vanish');
        resultMeter.value = resultCount;  
        totalPoint.textContent = `You have scored ${resultCount} out of 10`; 
    }
}

