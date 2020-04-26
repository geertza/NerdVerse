let shuffledQ
 currentQ="0";
  rightAnswer="";
  score="0"
  time = "90"
  highScore=JSON.parse(localStorage.getItem("highScoreList")) || [];





// start game---------------
        // Simplify later--------
$(".startGame").click(function(){
    $(".open").hide(); $(".Game").css('display','block');
    shuffledQ = questions.sort(() => Math.random() - .5)
countdown()
    setTable() 
 })

 function setTable() {
    showQuestion(shuffledQ[currentQ])
    }
function showQuestion(question){
    if  (time <= 0 || currentQ >= "10") {
      clearInterval();    
       $(".Game").hide();
       $("#crest").hide();
       highScoreSet();}
       else{
      $('.A').text(question.a)
    $('.B').text(question.b)
    $('.C').text(question.c)
    $('.D').text(question.d)
     $("h6").text(question.question)
    rightAnswer=question.e}
    
    
}


function countdown(){
  setInterval(function(){
     $('p3').text(time);
  $('p4').text(score)
    time--;
    },1000);}
 



//  answer Selector function
  $(".answer").click(function() {
    var x = $(this).val();
   
    // test selection against correct answer
    if (rightAnswer==x) {
      score++
      currentQ++
      right.play()
       setTable()
      }
    else {
      currentQ++
      setTable()
      wrong.play()
      time -= 10
    }})

    function highScoreSet(){
      let playerScore={finalScore:score,name:playerName};
      highScore.push(playerScore);
      highScore.sort((a,b) => b.finalScore - a.finalScore)
    highScore.splice(5)
    localStorage.setItem("highScoreList",JSON.stringify(highScore));
    final()
    }
    

    function final(){
      $(".screenSize").css({"background-color": "black"})
      $(".display").css({ "background-image": "url('./images/NVcrest.png')","-webkit-filter":"drop-shadow(4px 3px 5px gold)",
    "background-size":"contain","background-repeat":"no-repeat","background-image-Position":"right right"})
      $(".highScore").show()
    for (i = 0; i < highScore.length; i++) {
      let newDiv= document.createElement("div")
          newDiv.innerHTML=highScore[i].name+"  "+"  "+"  "+" "+highScore[i].finalScore;
          $(".highScore").append(newDiv)}
          setTimeout(restart,10000)
    
    }


    function restart(){
      location.reload();
    }