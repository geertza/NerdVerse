let playerName=""
    br= document.createElement("BR")



        // enter name and start game
    $(".add-player").click(function(){
   playerName=$(".name").val()
   $(".askName").hide()
   $("#speech1").text("Welcome "+playerName);
    $("#speech2").text("Your transport is a bit late, but shall arrive shortly.");
     $("#speech3").text("While we wait why don't you go over the options.. ");
    setTimeout(options,2500)
})

//  Give player options for the game
function options(){
    $("#speech4").text("It defies my logic circuits how this guy is always late!");
   setTimeout(hesHere,3000)
}
function hesHere(){
    $(".talk").empty()
    $("#speech1").text("Finally he is here!")
}