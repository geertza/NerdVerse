let playerName="andy"
  
    
    
 
        // enter name and start game
    $(".add-player").click(intro)

    // let nameinput=
    $(".name").on('keypress',function(e) {
        if(e.which == 13) {
            intro();
        }
    });
    function intro(){
   playerName=$(".name").val()
   if (playerName == false){
       return
   }else{
   $(".askName").hide()
   $("#speech1").text("Welcome "+playerName);
    $("#speech2").text("Your transport is a bit late, but shall arrive shortly.");
    $("#speech3").text("It defies my logic circuits how this guy is always late!")
    $(".content").hide();
    setTimeout(tardis,4000)
}}


 function tardis(){
     $(".display").prepend('<img id="policeBox" src="./images/tardis.png" >')
     x= document.getElementById("tardisAudio")
    x.play()
     setTimeout(hesHere,200)  
    }

function hesHere(){
    $(".talk").empty()
    $("#speech1").text("Finally he is here!")
    setTimeout(getin,200)
}

function getin(){
    $(".host1").hide();$(".host2").toggle()
    $("#speech1").text("Get in the box.");
    $("#speech2").text("I have many great wonders in there.");
    $("#speech3").empty()
    $("#speech3").text("Why do you look scared?");
    $("#speech4").text("You just have to answer some questions..");
    $(".bubble").css('box-shadow', '2px 5px 6px 10px #003b6f');
    
    $(".getIn").css( "display", "block" )

}






