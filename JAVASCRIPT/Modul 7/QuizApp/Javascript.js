let questions = [
    {
        "question": "Wer hat das HTML erfunden?",
        "answer_1": "Robbie Williams",
        "answer_2": "Lady Gaga",
        "answer_3": "Tim Berners-Lee",
        "answer_4": "Justin Bieber",
        "right_answer": 3
    },

    {
        "question": "Was bedeutet das HTML Tag &lt;a&gt;?",
        "answer_1": "Text Fett",
        "answer_2": "Container",
        "answer_3": "Ein Link",
        "answer_4": "Kursiv",
        "right_answer": 3
    },

    {
        "question": "Wie heißt die Hauptstadt der Slowakei?",
        "answer_1": "Sofia",
        "answer_2": "Prag",
        "answer_3": "Bratislava",
        "answer_4": "Ljubljana",
        "right_answer": 3
    },

    {
        "question": "Wie hoch ist die Mehrwertsteuer in Deutschland?",
        "answer_1": "16",
        "answer_2": "14",
        "answer_3": "23",
        "answer_4": "19",
        "right_answer": 4
    }
];

let rightQuestions = 0;

let currentQuestion = 0;

function init() {
    document.getElementById('all-questions').innerHTML = questions.length;

    showQuestion();
}

function showQuestion() {

    if (currentQuestion >= questions.length) {
        document.getElementById('endScreen').style = "";
        document.getElementById('questionBody').style = "display: none";

        document.getElementById('amountOfQuestions').innerHTML = questions.length;
        document.getElementById('amount-right-answer').innerHTML = rightQuestions;
    }else {
    
        let percent = (currentQuestion + 1) / questions.length;
        percent = percent * 100;
        document.getElementById('progress-bar').innerHTML = `${percent} %`;
        document.getElementById('progress-bar').style = ` width: ${percent}%;`;

    let question = questions[currentQuestion]
    document.getElementById('question-number').innerHTML = currentQuestion + 1;
    document.getElementById('questionText').innerHTML = question['question'];
    document.getElementById('answer_1').innerHTML = question['answer_1'];
    document.getElementById('answer_2').innerHTML = question['answer_2'];
    document.getElementById('answer_3').innerHTML = question['answer_3'];
    document.getElementById('answer_4').innerHTML = question['answer_4'];
    }     
}

function answer(selection) {
    let question = questions[currentQuestion]; 
    console.log("Answer: ", selection);
    let selectedQuestionNumber = selection.slice(-1);

    let idOfRightAnswer = `answer_${question["right_answer"]}`;

    if (selectedQuestionNumber == question["right_answer"]) {
        console.log('Richtige Antwort!!');
        document.getElementById(selection).parentNode.classList.add('bg-success');
        rightQuestions++
    } else {
        console.log('Falsche Antwort!!');
        document.getElementById(selection).parentNode.classList.add('bg-danger');
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
    };
    document.getElementById('next-question').disabled = false;
}

function nextQuestion() {
    currentQuestion++;
    resetButtons()
    showQuestion();

    document.getElementById('next-question').disabled = true;

    
}
function resetButtons() {
    document.getElementById('answer_1').parentNode.classList.remove('bg-danger')
    document.getElementById('answer_1').parentNode.classList.remove('bg-success')
    document.getElementById('answer_2').parentNode.classList.remove('bg-danger')
    document.getElementById('answer_2').parentNode.classList.remove('bg-success')
    document.getElementById('answer_3').parentNode.classList.remove('bg-danger')
    document.getElementById('answer_3').parentNode.classList.remove('bg-success')
    document.getElementById('answer_4').parentNode.classList.remove('bg-danger')
    document.getElementById('answer_4').parentNode.classList.remove('bg-success')
}

function restartGame() {
document.getElementById('questionBody').style = "";
document.getElementById('endScreen').style = "display: none";


rightQuestions = 0;
currentQuestion = 0;
init();

}