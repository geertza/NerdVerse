let shuffledQ
 currentQ="0";
  y="";
  score="0"
  time = "30"
  highScore=JSON.parse(localStorage.getItem("highScoreList")) || [];





// start game---------------
        // Simplify later--------
$(".startGame").click(startGame())
function startGame(){
    $(".open").hide(); $(".Game").css('display','block');
    shuffledQ = questions.sort(() => Math.random() - .5)
  currentQ = 0
  setTable() 
 }

 function setTable() {
    showQuestion(shuffledQ[currentQ])
    }
function showQuestion(question){
    $('.A').text(question.a)
    $('.B').text(question.b)
    $('.C').text(question.c)
    $('.D').text(question.d)
     $("h6").text(question.question)

}