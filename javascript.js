var myQuestions = [
    {
        question: "1. Who is the founder of Apple?",
        answers: {
        a: 'Bill gates',
        b: 'Steve Jobs',
        c: 'Linus Tolvars'
        },
        correctAnswer: 'b'
    },
    {
        question: "2. what is the tallest building in the world?",
        answers: {
            a: 'Burj Khalifa',
            b: 'Petronas Tower',
            c: 'Monumen Nasional'
        },
        correctAnswer: 'a'
    },
    {
        question: "3. What is the closest star after The Sun?",
        answers: {
            a: 'Betelgeuse',
            b: 'Proxima Centauri',
            c: 'Aldebaran'
        },
        correctAnswer: 'b'
    },
    {
        question: "4. What is the capital city of Peru?",
        answers: {
            a: 'Moscow',
            b: 'Canberra',
            c: 'Lima'
        },
        correctAnswer: 'c'
    }
];
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        var output = [];
        var answers;

        for(var i=0; i<questions.length; i++){
            
            answers = [];
            for(letter in questions[i].answers){

                answers.push(
                    '<label>'
                        + '<input type="radio" name="question'+i+'" value="'+letter+'">'
                        + letter + ': '
                        + questions[i].answers[letter]
                    + '</label>'
                );
            }

            output.push(
                '<div class="question">' + questions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            );
        }

        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer){
        
        var answerContainers = quizContainer.querySelectorAll('.answers');
        
        var userAnswer = '';
        var numCorrect = 0;
        
        for(var i=0; i<questions.length; i++){

            userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            
            if(userAnswer===questions[i].correctAnswer){
                numCorrect++;
                
                answerContainers[i].style.color = 'lightgreen';
            }
            else{
                answerContainers[i].style.color = 'red';
            }
        }

        resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
    }

    showQuestions(questions, quizContainer);
    
    submitButton.onclick = function(){
        showResults(questions, quizContainer, resultsContainer);
    }

}