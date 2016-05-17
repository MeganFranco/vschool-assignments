$(document).ready(function () {

    $(document).ready(function () {
        $("#my_audio").get(0).play();
    });

    function nightMode() {
     $("body").css("-webkit-filter","invert(100%)")
    }

    var goombaCoins = parseInt($("#goombaCoins").html());
    var goombasCaught = parseInt($("#goombaCaught").html());
    var bobCoins = parseInt($("#bobCoins").html());
    var bobCaught = parseInt($("#bobCaught").html());
    var cheepCoins = parseInt($("#cheepCoins").html());
    var cheepCaught = parseInt($("#cheepCaught").html());

    var goombaCost = goombaCoins * goombasCaught;
    var bobCost = bobCoins * bobCaught;
    var cheepCost = cheepCoins * cheepCaught;

    $("#goombaResult").html(goombaCost);
    $("#bob-bombResult").html(bobCost);
    $("#cheep-cheepResult").html(cheepCost)

    console.log(goombaCoins);
    console.log(bobCoins);
    console.log(cheepCoins);




})