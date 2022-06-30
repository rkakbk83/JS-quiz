var quizdata = [
    {
        question: 'Which framework related to Java-Script?',
        a: '.net',
        b: 'flask',
        c: 'react',
        d: 'django',
        correct: 'c',
    },
    {
        question: 'Which is not a programming language?',
        a: 'HTML',
        b: 'JS',
        c: 'JAVA',
        d: 'python',
        correct: 'a',
    },
    {
        question: 'Which is not a framework?',
        a: 'javascript',
        b: 'angular',
        c: 'react',
        d: 'django',
        correct: 'a',

    },
    {
        question: 'CSS stand for',
        a: 'casecading style state',
        b: 'cascading style sheet',
        c: 'cascading sheet of style',
        d: 'none',
        correct: 'b',
    }

]
var quiz = document.getElementById('quizdiv')
var answer = document.querySelectorAll('.answer')
var question = document.getElementById('question')
var option_a = document.getElementById('a-val')
var option_b = document.getElementById('b-val')
var option_c = document.getElementById('c-val')
var option_d = document.getElementById('d-val')
var submitbtn = document.getElementById('submit')


var currquestion = 0
var score = 0


loadquiz()

function loadquiz() {

    deselect();
    question.innerHTML = quizdata[currquestion].question
    option_a.innerText = quizdata[currquestion].a
    option_b.innerText = quizdata[currquestion].b
    option_c.innerText = quizdata[currquestion].c
    option_d.innerText = quizdata[currquestion].d
}
function deselect() {
    answer.forEach(answer => answer.checked = false)
}

submitbtn.addEventListener('click', () => {
    var selectoption
    answer.forEach(answer => {
        if (answer.checked) {
            selectoption = answer.id
        }
    })
    if (selectoption ==quizdata[currquestion].correct) {
        score = score + 1
    }
    currquestion = currquestion + 1
    if (currquestion == quizdata.length)
    {
        document.getElementById('quizdiv').innerHTML = `<h1>You have answered ${score} correctly out of ${quizdata.length} <h1>`
    }
    else {
        loadquiz()
    }
})