$(document).ready(function() { 

var theQuestions = {

	question1: {
	questionText: "First Question?",
	ans1: "answer 1",
	ans2: "answe 2",
	ans3: "answer 3",
	ans4: "answer 4",
	corAnswer: 4
},

	question2: {
	questionText: "Second question?",
	ans1: "answer 1",
	ans2: "answe 2",
	ans3: "answer 3",
	ans4: "answer 4",
	corAnswer: 2
},

	question3: {
	questionText: "Third Question?",
	ans1: "answer 1",
	ans2: "answe 2",
	ans3: "answer 3",
	ans4: "answer 4",
	corAnswer: 4
},

	question4: {
	questionText: "Forth Question?",
	ans1: "answer 1",
	ans2: "answe 2",
	ans3: "answer 3",
	ans4: "answer 4",
	corAnswer: 3
},

	question5: {
	questionText: "Fifth Question?",
	ans1: "answer 1",
	ans2: "answe 2",
	ans3: "answer 3",
	ans4: "answer 4",
	corAnswer: 3
},

	question6: {
	questionText: "Sixth Question?",
	ans1: "answer 1",
	ans2: "answe 2",
	ans3: "answer 3",
	ans4: "answer 4",
	corAnswer: 2
},

	question7: {
	questionText: "Seventh Question?",
	ans1: "answer 1",
	ans2: "answe 2",
	ans3: "answer 3",
	ans4: "answer 4",
	corAnswer: 1
},

	question8: {
	questionText: "Eigth Question?",
	ans1: "answer 1",
	ans2: "answer 2",
	ans3: "answer 3",
	ans4: "answer 4",
	corAnswer: 1
},
};

var box_checked;
var hits = 0;
var misses = 0;

function Question(object) {
	$('.question').html(object.questionText);
	$('.ansA').html(object.ans1);
	$('.ansB').html(object.ans2);
	$('.ansC').html(object.ans3);
	$('.ansD').html(object.ans4);
}

function is_checked () {
	var a_checked = document.getElementById('#auto_renew_a').checked;
	var b_checked = document.getElementById('#auto_renew_b').checked;
	var c_checked = document.getElementById('#auto_renew_c').checked;
	var d_checked = document.getElementById('#auto_renew_d').checked;

	if (a_checked===false && b_checked===false && c_checked===false && d_checked===false) {
		alert("Select an option");
	}
		else if (a_checked == true) {
			return "a_checked";
		}

		else if (b_checked == true) {
			return "b_checked";
		}

		else if (c_checked == true) {
			return "c_checked";
		}

		else if (d_checked == true) {
			return "d_checked";
		}
		
	}

	function runQuestion() {
	var userAns;
	$('button').removeClass("startButton");
	$('button').addClass("nextButton");
	$('.nextButton').html("Next");



	$('input').show();

	Question(theQuestions.question1);
	}

// 	if (a_checked == true) {
// 		box_checked = a;
// 	}

// 	else if (b_checked == true) {
// 		box_checked = b;
// 	}

// 	else if (c_checked == true) {
// 		box_checked = c;
// 	}

// 	else if (d_checked == true) {
// 		box_checked = d;
// 	}

// console.log(box_checked);


 

// function ansClick() {
// 	var a;
// 	$('.ansA').on('click', function(event) {
// 		a = 1;
// 	});
// 	$('.ansB').on('click', function(event) {
// 		a = 2;
// 	});
// 	$('.ansC').on('click', function(event) {
// 		a = 3;
// 	});
// 	$('.ansD').on('click', function(event) {
// 		a = 4;
// 	});

// 		console.log("ansClick: " + a);

// 	return a;
// }

$('input').hide();


$('.startButton').on("click", function(event) {

	// setTimeout(runQuestion(),

	
	});

$('.nextButton').on("click", function(event){
	var choice = is_checked();



	// setTimeout()
})


});

// });