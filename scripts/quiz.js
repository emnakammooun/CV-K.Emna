var quiz = { "JS" : [
	{
		"id" : 1,
		"question" : "Inside which HTML element do we put the JavaScript?",
		"options" : [
			{"a": "&lt;script&gt;", 
			 "b":"&lt;javascript&gt;", 
			 "c":"&lt;scripting&gt;", 
			 "d":"&lt;js&gt;"}
			],
		"answer":"&lt;script&gt;",
		"score":0,
		"status": ""
	},

	{
		"id" : 2,
		"question" : "What is the correct syntax for referring to an external script called 'xxx.js'?",
		"options" : [
			{"a": "&ltscript href=&quot;xxx.js&quot;>", 
			 "b":"&lt;script name=&quot;xxx.js&quot;&gt;", 
			 "c":"&lt;script src=&quot;xxx.js&quot;&gt;"}
			],
		"answer":"&lt;script src=&quot;xxx.js&quot;&gt;",
		"score":0,
		"status": ""
	},
	{
		"id" :3,
		"question" : "How do you write &quot;Hello World&quot; in an alert box?",
		"options" : [
			{"a": "alertBox(&quot;Hello World&quot;);", 
			 "b":"msg(&quot;Hello World&quot;);",
			 "c":"alert(&quot;Hello World&quot;);",
			 "d":"msgBox(&quot;Hello World&quot;);",
			}
			],
		"answer":"alert(&quot;Hello World&quot;);",
		"score":0,
		"status": ""
	},
	{
		"id" : 4,
		"question" : "How does a FOR loop start?",
		"options" : [
			{"a": "for (i = 0; i &lt;= 5)", 
			 "b":"for (i = 0; i &lt;= 5; i++)",
			 "c":"for i = 1 to 5",
			 "d":"for (i &lt;= 5; i++)"
			}
			],
		"answer":"for (i = 0; i &lt;= 5; i++)",
		"score":0,
		"status": ""
	},
	{
		"id" : 5,
		"question" : "How to insert a comment that has more than one line?",
		"options" : [
			{"a": "/*This comment has more than one line*/", 
			 "b":"//This comment has more than one line//",
			 "c":"&lt;!--This comment has more than one line--&gt;"
			}
			],
		"answer":"/*This comment has more than one line*/",
		"score":0,
		"status": ""
	},
	{
		"id" : 6,
		"question" : "What is the correct way to write a JavaScript array?",
		"options" : [
			{"a": "var colors = (1:&quot;red&quot;, 2:&quot;green&quot;, 3:&quot;blue&quot;)", 
			 "b":"var colors = [&quot;red&quot;, &quot;green&quot;, &quot;blue&quot;]",
			 "c":"var colors = 1 = (&quot;red&quot;), 2 = (&quot;green&quot;), 3 = (&quot;blue&quot;)",
			 "d":"var colors = &quot;red&quot;, &quot;green&quot;, &quot;blue&quot;"
			}
			],
		"answer":"var colors = [&quot;red&quot;, &quot;green&quot;, &quot;blue&quot;]",
		"score":0,
		"status": ""
	},
	{
		"id" : 7,
		"question" : "How do you round the number 7.25, to the nearest integer?",
		"options" : [
			{"a": "rnd(7.25)", 
			 "b":"Math.round(7.25)",
			 "c":"Math.rnd(7.25)",
			 "d":"round(7.25)"
			}
			],
		"answer":"Math.round(7.25)",
		"score":0,
		"status": ""
	},
	{
		"id" : 8,
		"question" : "How do you find the number with the highest value of x and y?",
		"options" : [
			{"a": "Math.max(x, y)", 
			 "b":"Math.ceil(x, y)",
			 "c":"top(x, y)",
			 "d":"ceil(x, y)"
			}
			],
		"answer":"Math.max(x, y)",
		"score":0,
		"status": ""
	},
	{
		"id" : 9,
		"question" : "What is the correct JavaScript syntax for opening a new window called &quot;w2&quot;?",
		"options" : [
			{"a": "w2 = window.new(&quot;http://www.w3schools.com&quot;);", 
			 "b":"w2 = window.open(&quot;http://www.w3schools.com&quot;);"

			}
			],
		"answer":"w2 = window.open(&quot;http://www.w3schools.com&quot;);",
		"score":0,
		"status": ""
	},
	{
		"id" : 10,
		"question" : "JavaScript is the same as Java.",
		"options" : [
			{"a": "true", 
			 "b":"false"

			}
			],
		"answer":"false",
		"score":0,
		"status": ""
	},
	{
		"id" : 11,
		"question" : "How can you detect the client&rsquo;s browser name?",
		"options" : [
			{"a": "navigator.appName", 
			 "b":"browser.name",
			 "c":"client.navName"
			}
			],
		"answer":"navigator.appName",
		"score":0,
		"status": ""
	},
	{
		"id" : 12,
		"question" : "Which event occurs when the user clicks on an HTML element?",
		"options" : [
			{"a": "onchange", 
			 "b":"onclick",
			 "c":"onmouseclick",
			 "d":"onmouseover"
			}
			],
		"answer":"onclick",
		"score":0,
		"status": ""
	},
	{
		"id" : 13,
		"question" : "How do you declare a JavaScript variable?",
		"options" : [
			{"a": "var carName;", 
			 "b":"variable carName;",
			 "c":"v carName;"
			}
			],
		"answer":"var carName;",
		"score":0,
		"status": ""
	},
	{
		"id" : 14,
		"question" : "Which operator is used to assign a value to a variable?",
		"options" : [
			{"a": "*", 
			 "b":"-",
			 "c":"=",
			 "d":"x"
			}
			],
		"answer":"=",
		"score":0,
		"status": ""
	},

	{
		"id" : 15,
		"question" : "Is JavaScript case-sensitive?",
		"options" : [
			{"a": "No", 
			 "b":"Yes"
			}
			],
		"answer":"Yes",
		"score":0,
		"status": ""
	}
	]
}



var quizApp = function() {

	this.score = 0;		
	this.qno = 1;
	this.currentque = 0;
	var totalque = quiz.JS.length;

	
	this.displayQuiz = function(cque) {
		this.currentque = cque;
		if(this.currentque <  totalque) {
			$("#tque").html(totalque);
			$("#previous").attr("disabled", false);
			$("#next").attr("disabled", false);
			$("#qid").html(quiz.JS[this.currentque].id + '.');
	
			
			$("#question").html(quiz.JS[this.currentque].question);	
			 $("#question-options").html("");
			for (var key in quiz.JS[this.currentque].options[0]) {
			  if (quiz.JS[this.currentque].options[0].hasOwnProperty(key)) {
		
				$("#question-options").append(
					"<div class='form-check option-block'>" +
					"<label class='form-check-label'>" +
							  "<input type='radio' class='form-check-input' name='option'   id='q"+key+"' value='" + quiz.JS[this.currentque].options[0][key] + "'><span id='optionval'>" +
								  quiz.JS[this.currentque].options[0][key] +
							 "</span></label>"
				);
			  }
			}
		}
		if(this.currentque <= 0) {
			$("#previous").attr("disabled", true);	
		}
		if(this.currentque >= totalque) {
				$('#next').attr('disabled', true);
				for(var i = 0; i < totalque; i++) {
					this.score = this.score + quiz.JS[i].score;
				}
			return this.showResult(this.score);	
		}
	}
	
	this.showResult = function(scr) {
		$("#result").addClass('result');
		$("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr  + '/' + totalque + "</h1>");
		for(var j = 0; j < totalque; j++) {
			var res;
			if(quiz.JS[j].score == 0) {
					res = '<span class="wrong">' + quiz.JS[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
			} else {
				res = '<span class="correct">' + quiz.JS[j].score + '</span><i class="fa fa-check c-correct"></i>';
			}
			$("#result").append(
			'<div class="result-question"><span>Q ' + quiz.JS[j].id + '</span> &nbsp;' + quiz.JS[j].question + '</div>' +
			'<div><b>Correct answer:</b> &nbsp;' + quiz.JS[j].answer + '</div>' +
			'<div class="last-row"><b>Score:</b> &nbsp;' + res +
			
			'</div>' 
			
			);
			
		}
	}
	
	this.checkAnswer = function(option) {
		var answer = quiz.JS[this.currentque].answer;
		option = option.replace(/\</g,"&lt;")   //for <
		option = option.replace(/\>/g,"&gt;")   //for >
		option = option.replace(/"/g, "&quot;")

		if(option ==  quiz.JS[this.currentque].answer) {
			if(quiz.JS[this.currentque].score == "") {
				quiz.JS[this.currentque].score = 1;
				quiz.JS[this.currentque].status = "correct";
		}
		} else {
			quiz.JS[this.currentque].status = "wrong";
		}
		
	}	
	 
	this.changeQuestion = function(cque) {
			this.currentque = this.currentque + cque;
			this.displayQuiz(this.currentque);	
			
	}
	
}


var jsq = new quizApp();

var selectedopt;
	$(document).ready(function() {
			jsq.displayQuiz(0);		
		
	$('#question-options').on('change', 'input[type=radio][name=option]', function(e) {

			//var radio = $(this).find('input:radio');
			$(this).prop("checked", true);
				selectedopt = $(this).val();
		});
		
			
			 
	});
	$('#next').click(function(e) {
			e.preventDefault();
			if(selectedopt) {
				jsq.checkAnswer(selectedopt);
			}
			jsq.changeQuestion(1);
	});	
	
	$('#previous').click(function(e) {
		e.preventDefault();
		if(selectedopt) {
			jsq.checkAnswer(selectedopt);
		}
			jsq.changeQuestion(-1);
	});	