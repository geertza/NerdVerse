let shuffledQ
 currentQ="0";
  rightAnswer="";
  score="0"
  time = "90"
  highScore=JSON.parse(localStorage.getItem("highScoreList")) || [];





// start game---------------
        // Simplify later--------
$(".startGame").click(startGame())
function startGame(){
    $(".open").hide(); $(".Game").css('display','block');
    shuffledQ = questions.sort(() => Math.random() - .5)
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
    rightAnswer=question.e
    timer()
}
 // timer function

 var chrono = setInterval(timer, 1000); 
 function timer(){
  $('p3').text(time);
  $('p4').text(score)
  if  (time <= 0 || currentQ >= "10") {
  clearInterval(chrono);    
  highScoreSet();
   $(".Game").hide()
   alert("game over")
 }else{
   time--;
  
 }
}

  




//  answer Selector function
  $(".answer").click(function() {
    var x = $(this).val();
   
    // test selection against correct answer
    if (rightAnswer==x) {
      score++
      currentQ++
      
    //  right.play()
       setTable()
      
    }
    else {
      currentQ++
      setTable()
      // wrong.play()
      time -= 10
    }})

    function highScoreSet(){
      let playerScore={finalScore:score,name:playerName};
      highScore.push(playerScore);
      highScore.sort((a,b) => b.finalScore - a.finalScore)
    highScore.splice(5)
    localStorage.setItem("highScoreList",JSON.stringify(highScore));
    console.log(highScore)
    
    }
    