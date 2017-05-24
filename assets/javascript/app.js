$(document).ready(function() { 

var theQuestions = {

	question1: {
	questionText: "Which of these groups contain only dinosaurs?",
	answersObj: ["Pterosaur",  "Lepidosaur", "Archosaur", "Dromaeosaur"],
	corAnswer: 4
},

	question2: {
	questionText: "Tyrannosaurus Rex is known from fossils found in northern US and southern Canada. What is the name of its Asian relative that is nearly identical, despite being slightly smaller?",
	answersObj: ["Giganotosaurus",  "Tarbosaurus", "Yutyrannus Rex", "Carcharnodontosaurus"],
	corAnswer: 2
},

	question3: {
	questionText: "A recent study by Graduate Student Matt Baron propeses what dastric change in dinosaur taxonomy?",
	answersObj: ["Modern birds are not decended from any dinosaur lineage",  "Ceratopsians belong in Sauropoda instead of Ornithiscia", "Modern birds evolved from Ornithiscia instead of from Theropods", "Theropoda is more closely related to Ornithiscians instead of sharing close ancestry with Sauropoda"],
	corAnswer: 4
},

	question4: {
	questionText: "Forth Question?",
	answersObj: ["answer 1",  "answer 2", "answer 3", "answer 4"],
	corAnswer: 3
},

	question5: {
	questionText: "Fifth Question?",
	answersObj: ["answer 1",  "answer 2", "answer 3", "answer 4"],
	corAnswer: 3
},

	question6: {
	questionText: "Sixth Question?",
	answersObj: ["answer 1",  "answer 2", "answer 3", "answer 4"],
	corAnswer: 2
},

	question7: {
	questionText: "Seventh Question?",
	answersObj: ["answer 1",  "answer 2", "answer 3", "answer 4"],
	corAnswer: 1
},

	question8: {
	questionText: "Eigth Question?",
	answersObj: ["answer 1",  "answer 2", "answer 3", "answer 4"],
	corAnswer: 1
},};

var box_checked;
var hits = 0;
var misses = 0;
var iterator = 1;
var intervalId;
var clockRunning = false;

var timer = {
	time: 30,

	reset: function() {
		timer.time = 30;

		$('.timerHTML').html("30");
	},

	start: function() {
		if (!clockRunning) {
			timer.time = setInterval(timer.count, 1000);
			clockRunning = true;
		}
	},

	count: function() {
		timer.time--;
		// var currentTime = timer.time;
		// var currentTimeAdjust = currentTime + 30;

		$('.timerHTML').html(timer.time);
		// currentTimeAdjust--;
		// console.log(currentTime);
		// console.log(currentTimeAdjust);
	},
};

function Question(object) {
	
	$('.question').html(object.questionText);
	$('.ansA').html(object.answersObj[0]);
	$('.ansB').html(object.answersObj[1]);
	$('.ansC').html(object.answersObj[2]);
	$('.ansD').html(object.answersObj[3]);
}

function is_checked () {
	var a_checked = document.getElementById('auto_renew_a').checked;
	var b_checked = document.getElementById('auto_renew_b').checked;
	var c_checked = document.getElementById('auto_renew_c').checked;
	var d_checked = document.getElementById('auto_renew_d').checked;

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
	$('.startButton').hide();
	$('.nextButton').show();



	$('input').show();

	Question(theQuestions.question1);
	}

	function ansChecker (crctAnsr, userChoice) {
		if (crctAnsr == userChoice) {
			hits++;
		}

		else {
			misses++;
		}
	}

	function nextBtnQustChngr() {
		Question(theQuestions['question' + iterator]);
		iterator++;
	}

	$('.nextButton').hide();




$('input').hide();


$('.startButton').on("click", function(event) {

		runQuestion();
		timer.start();
		iterator++;


	
	});

$('.nextButton').on("click", function(event){
	var choice = is_checked();

	a_checked = document.getElementById('auto_renew_a').checked = false;
	b_checked = document.getElementById('auto_renew_b').checked = false;
	c_checked = document.getElementById('auto_renew_c').checked = false;
	d_checked = document.getElementById('auto_renew_d').checked = false;

	ansChecker();

	nextBtnQustChngr();

	timer.reset();

})


});

  