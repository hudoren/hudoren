/*js.js */
/* Programmé par Jonathan Larouche */
/* Le 21 novembre 2019 */


$('#court').hide();
$('#long').hide();



$("#word").keyup(function() {

    var mot = $("#word").val();

    if (mot.length < 3){
        $("#court").show();
    }
    else if (mot.length >= 3 && mot.length < 12){
        $("#court").hide();
        $("#long").hide();
    }
    else if (mot.length > 12){
        $("#long").show();
    }

});



$("#go").click(function() {

    var tab = [];

    var mot = $("#word").val();

    var Maj = mot.toUpperCase();

    tab = Maj.split('');

    for ( var i = 0; i <  mot.length ; i++){
        var letter = tab[i];
        if (tab[i]=== "*"){
            $("#lettre" + i).attr("src", "Letters/CS/CS1.jpg");
        }
        else {

            $("#lettre"+ i).attr("src" , "Letters/" + letter + "/" + letter + "1.jpg");
        }
    }

tab = [];

  if (mot.length === 3 ){
        $('.ajust').attr('class' , 'col-4');
        for (x = 3; x <= 11; x++){
            $('#lettre' + x).hide();

        }
    }
    else if (mot.length === 4){
        $('.ajust').attr('class' , 'col-3');
        for (y = 4; y <= 11; y++){
            $('#lettre' + y).hide();
        }
    }
    else if (mot.length === 5){
        $('.ajust').attr('class' , 'col-2');
        for (z = 5; z <= 11; z++){
            $('#lettre' + z).hide();
        }
    }
    else if (mot.length === 6){
        $('.ajust').attr('class' , 'col-2');
        for (a = 6; a <= 11; a++){
            $('#lettre' + a).hide();
        }
    }
    else if (mot.length === 7){
        for (b = 7; b <= 11; b++){
            $('#lettre' + b ).hide();
        }
    }
    else if (mot.length === 8 ){
        for (c = 8; c <= 11; c++){
            $('#lettre' + c ).hide();
        }
    }
    else if (mot.length === 9 ){
        for (d = 9; d <= 11; d++){
            $('#lettre' + d ).hide();
        }
    }
    else if (mot.length === 10 ){
        for (e = 10; e <= 11; e++){
            $('#lettre' + e ).hide();
        }
    }
    else if (mot.length === 11 ){
        for (f = 11; f<= 11; f++){
            $('#lettre' + f ).hide();
        }
    }

});

$('#blanc').click(function() {
    $('.bg').css('background-color' , 'white');
});

$('#bleu').click(function() {
    $('.bg').css('background-color' , 'blue');
});

$('#bleuFoncer').click(function() {
    $('.bg').css('background-color' , 'darkblue');
});

$('#gris').click(function() {
    $('.bg').css('background-color' , 'grey');
});

$('#noir').click(function() {
    $('.bg').css('background-color' , 'black');
});

$('#rose').click(function() {
    $('.bg').css('background-color' , 'pink');
});

$('#rouge').click(function() {
    $('.bg').css('background-color' , 'red');
});

$("#reload").click(function() {

   location.reload();

});