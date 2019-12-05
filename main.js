
let score = 0;
let currentQuestion =0;
let questions = [
  {
    title: "Inside which HTML element do we put the JavaScript?",
    answers: ["js", "scripting", "javascript", "script"],
    correct: 3
  },
  {
    title: "Where is the correct place to insert a JavaScript?",
    answers: ["div", "body", "header", "title"],
    correct: 1
  },
  {
    title: "What does CSS stand for? Cascading Style Sheets?",
    answers: ["Create style sheets", "Computer style sheets", "Colorful style Sheets", "Cascading style sheets"],
    correct: 3
  },
  {
    title: "Which HTML attribute is used to define inline styles?",
    answers: ["style", "font", "styles", "class"],
    correct: 0
  },
];

$(document).ready(function(){

 $('.start').click(function(e){
  e.preventDefault();
  $('.start').hide();
  $('.quiz').show();
  showQuestion();
 });

 $('.quiz ul').on('click', 'li',function(){
   $('.selected').removeClass('selected');
   $(this).addClass('selected');
 });

 $('.quiz a').click(function(e){
  e.preventDefault();
  if($('li.selected').length){
    let guess = parseInt($('li.selected').attr('id'));
    checkAnswer(guess);
  } else {
    alert('Please select an answer');
  }    
});

$('.summary a').click(function(e){
   e.preventDefault();
   restartQuiz();

});

});




function showQuestion(){
  let question = questions[currentQuestion];
  $('.quiz h2').text(question.title);
  $('.quiz ul').html('');
  for(var i=0; i<question.answers.length; i++){
    $('.quiz ul').append("<li id='"+i+"'>"+question.answers[i]+"</li>");
  }
}

function checkAnswer(guess){
  let question = questions[currentQuestion];
  if(question.correct === guess){
    score++;
  }
  currentQuestion++;
  if(currentQuestion >= questions.length){
    showSummary();
  } else {
  showQuestion();
}
}
function showSummary(){
  $('.quiz').hide();
  $('.summary').show();
  $('.summary p').text("Congrats you scored "+scored+" out of "+questions.length+" correct!");
}

function restartQuiz(){
  $('.summary').hide();
  $('.quiz').show();
  score = 0;
  currentQuestion = 0;
  showQuestion();

}
