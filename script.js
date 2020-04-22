let playerName=""
    br= document.createElement("BR")



        // enter name and start game
    $(".submitName").click(function(){
   playerName=$(".name").val()
   $(".askName").hide()
   $("#speech1").text("Welcome "+playerName);
    $("#speech2").text("Your transport is a bit late, but shall arrive shortly.");
    $("#speech5").hide()
    setTimeout(options,2500)
})

//  Give player options for the game
function options(){
    $("#speech4").text("While we wait why don't we go over the options.. ");
    let options = $("<div></div>");
    
    options.addClass("options");
     $(".bubble").append(options);
     
}
