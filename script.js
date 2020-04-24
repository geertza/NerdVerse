let playerName=""
  



        // enter name and start game
    $(".add-player").click(start)
    function start(){
   playerName=$(".name").val()
   $(".askName").hide()
   $("#speech1").text("Welcome "+playerName);
    $("#speech2").text("Your transport is a bit late, but shall arrive shortly.");
     $("#speech3").text("While we wait why don't you go over the options.. ");
    setTimeout(options,2000)
}

//  Give player options for the game
function options(){
    $("#speech4").text("It defies my logic circuits how this guy is always late!");
    $(".content").hide()
    setTimeout(tardis,2500)
    
}
 function tardis(){
     $(".display").prepend('<img id="policeBox" src="./images/tardis.png" >')
      setTimeout(hesHere,2000)  
    }

function hesHere(){
    $(".talk").empty()
    $("#speech1").text("Finally he is here!")
    setTimeout(getin,3000)
}

function getin(){
    $(".host1").hide();$(".host2").toggle()
    $("#speech1").text("Get in the box.");
    $("#speech2").text("I have many great wonders in there.");
    $("#speech3").text("Why do you look scared?");
    $("#speech4").text("You just have to answer some questions..");
    $(".bubble").css('box-shadow', '2px 5px 6px 10px #003b6f');
    $(".bubble").append(` <button type="submit" class="startGame">Get in the wierd guy's box</button>`)
}