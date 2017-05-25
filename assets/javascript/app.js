$(document).ready(function() { 

var theQuestions = {

	question1: {
	questionText: "Which of these groups contain only dinosaurs?",
	answersObj: ["Pterosauria",  "Lepidosauria", "Archosauria", "Dromaeosauridae"],
	corAnswer: 4,
	exp: "While Archosauria contains dinosaurs within the group, it is much larger and includes a variety of lineages. Dromaeosaurs are family of dinosaurs. Neither Lepidosauria nor Pterosauria contain any dinosaurs."
},

	question2: {
	questionText: "Tyrannosaurus Rex is known from fossils found in northern US and southern Canada. What is the name of its Asian relative that is nearly identical, despite being slightly smaller?",
	answersObj: ["Giganotosaurus",  "Tarbosaurus", "Yutyrannus Rex", "Carcharnodontosaurus"],
	corAnswer: 2,
	exp: "while all are large Theropods, the Tarbosaurus is strikingly similar to the T. Rex in all but geography and size."
},

	question3: {
	questionText: "A recent study by Graduate Student Matt Baron proposes what drastric change in dinosaur taxonomy?",
	answersObj: ["Modern birds are not decended from any dinosaur lineage",  "Ceratopsians belong in Sauropoda instead of Ornithiscia", "Modern birds evolved from Ornithiscia instead of from Theropods", "Theropoda is more closely related to Ornithiscians instead of sharing close ancestry with Sauropoda"],
	corAnswer: 4,
	exp: "in the late 19th century dinosaurs were divided into Ornithiscia, and Saurischians. The latter contained both Theropod and Saurpod dinosaurs. New research may suggest that the Theropods are more closely related to the Ornithiscians."
},

	question4: {
	questionText: "The suborder of Ceratopsia is easily recognized by what prominent feature?",
	answersObj: ["A large sickle shaped claw on the inner toe",  "Elongated necks, long tails, and generally massive size", "Large bony frills, and in many cases horns", "Boney plates along the back"],
	corAnswer: 3,
	exp: "Ceratopsia contains the famous Triceratops, along with many similar dinosaurs. Some with extremely elaborate frills and horns."
},

	question5: {
	questionText: "The spikes on the tail of a Stegosaurus is known as a thagomizer, this name is derived from:",
	answersObj: ["The Latin term for iron maiden, a 19th century torture device",  "The name for a growth off of a sacral vertebral bone", "A joke in a Farside comic", "The name of the species' founder"],
	corAnswer: 3,
	exp: "Gary Larson's Farside comic strip made up the word 'thagomizer' as a joke. Paleontologists adopted the term from him."
},

	question6: {
	questionText: "Which of these skeletal feature unites all dinosaurs, suggesting their common ancestry?",
	answersObj: ["A temporal opening, an opening around the eyes, behind the zygomatic arch",  "An open acetabulum (hip socket)", "An elongated tail supported by stiffened tendons", "Large size and scales"],
	corAnswer: 2,
	exp: "It is the open acetabulum, a structure in the hip that is common to all dinosaurs."
},

	question7: {
	questionText: "What was the first dinosaur to ever be named and described?",
	answersObj: ["Megalosaurus",  "Ceratosaurus", "Allosaurus", "Igunadon"],
	corAnswer: 1,
	exp: "Despite being the first large carnivorous dinosaur discovered, Megalosaurus remains an obscurity in dinosaur pop culture."
},

	question8: {
	questionText: "Which of the following was not a mistake made in the reconstruction of Igunadon?",
	answersObj: ["It was assumed to be a gigantic species of iguana by 19th century paleontologists",  "The thumbs were mistaken for teeth", "It was thought to be a quadraped", "A carnivores teeth were mistaken to be its teeth"],
	corAnswer: 1,
	exp: "Gideon Mantell knew that his discovery was not an iguana, but named it after a superficial resemblence of the teeth."
},

};

var box_checked;
var hits = 0;
var misses = 0;
var iterator = 1;
var intervalId;
var clockRunning = false;
var nextOn = false;
var gameOn = true;

var timer = {
	time: 30,

	reset: function() {
		timer.time = 30;

		$('.timerHTML').html("30");
	},

	start: function() {
		if (!clockRunning) {
			intervalId = setInterval(timer.count, 1000);
			clockRunning = true;
		}
	},

	count: function() {
		timer.time--;
		var currentTime = timer.time;

		$('.timerHTML').html(currentTime);
		console.log(currentTime);

		if (timer.time < 0) {
			clearInterval(intervalId);

			var choice = is_checked();

			ansChecker(choice, theQuestions['question' + (iterator-1)].corAnswer);

			a_checked = document.getElementById('auto_renew_a').checked = false;
			b_checked = document.getElementById('auto_renew_b').checked = false;
			c_checked = document.getElementById('auto_renew_c').checked = false;
			d_checked = document.getElementById('auto_renew_d').checked = false;



			nextBtnQustChngr();
			
			timer.reset();
		}
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
			return 1;
		}

		else if (b_checked == true) {
			return 2;
		}

		else if (c_checked == true) {
			return 3;
		}

		else if (d_checked == true) {
			return 4;
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
			$('.correct').html("Hits: " + hits);
		}

		else if (crctAnsr != userChoice && gameOn == true) {
			misses++;
			$('.incorrect').html("Misses: " + misses);
		}
	}

function nextBtnQustChngr() {
		Question(theQuestions['question' + iterator]);
		clockRunning = false;
		iterator++;
		gameOn = true;
		timer.reset();
		timer.start();
	}

function gameFinished () {
	$('input').hide();
	$('.timerHTML').hide();
	$('form').hide();
	$('button').hide();
	$('.explenation').hide();
	$('p').hide();
	$('.question').html("<p>You got " + hits + " of the 8 questions correct.</p><p>You missed " + misses + ".");
	$('question').append("</p><br><br><img src='../images/thagomizer.jpg'</img>");
}


	$('.nextButton').hide();


// if (timer.time < 0) {
// 			a_checked = document.getElementById('auto_renew_a').checked = false;
// 			b_checked = document.getElementById('auto_renew_b').checked = false;
// 			c_checked = document.getElementById('auto_renew_c').checked = false;
// 			d_checked = document.getElementById('auto_renew_d').checked = false;

// 			nextBtnQustChngr();
// 			// misses--;
// 			timer.reset();
// 			}

$('input').hide();
$('.explenation').hide();


$('.startButton').on("click", function(event) {

		runQuestion();
		timer.start();
		iterator++;


	
	});

$('.nextButton').on("click", function(event){
	
	if (hits + misses === 8 && gameOn == false) {
		gameFinished();
	}
	if (gameOn == true) {
		var choice = is_checked();
		console.log(choice);

		var rightAns = theQuestions['question' + (iterator-1)].corAnswer;

		ansChecker(choice, rightAns);



	if (nextOn == false) {
		$('.explenation').html(theQuestions['question' + (iterator-1)].exp);
		$('.explenation').show();
		clearInterval(intervalId);
		gameOn = false;

	}
	else {

	nextBtnQustChngr();



	nextOn = true;
}
}
else if (gameOn == false) {
	a_checked = document.getElementById('auto_renew_a').checked = false;
	b_checked = document.getElementById('auto_renew_b').checked = false;
	c_checked = document.getElementById('auto_renew_c').checked = false;
	d_checked = document.getElementById('auto_renew_d').checked = false;
		
	nextBtnQustChngr();
	timer.reset();
	$('.explenation').hide();



}

})


});
