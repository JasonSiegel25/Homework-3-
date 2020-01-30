function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

	function showQuestions(questions, quizContainer){
		
	}

	function showResults(questions, quizContainer, resultsContainer){
		
	}

	
	showQuestions(questions, quizContainer);

	
	submitButton.onclick = function(){
		showResults(questions, quizContainer, resultsContainer);
	}
} 
var myQuestions = [
	{
		question: "What does var stand for",
		answers: {
			a: 'nothing',
			b: 'variable',
			c: 'something'
		},
		correctAnswer: 'b'
	},
	{
		question: "the code to generate a random number",
		answers: {
			a: 'random',
			b: 'somethingrandom',
			c: 'math.Random'
		},
		correctAnswer: 'c'
	}
];

