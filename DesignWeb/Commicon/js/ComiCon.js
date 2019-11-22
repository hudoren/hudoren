$("#Ok").hide();
$("#Wrong").hide();
$("#Faible").hide();
$("#Moyen").hide();
$("#Fort").hide();
$("#Diff").hide();
$("#Same").hide();
$("#Valide").hide();
$("#Invalide").hide();

$("#images").hide();
$("#StarWars").hide();
$("#Marvel2").hide();
$("#DCok").hide();
$("#personnages").hide();

$("#Username").keyup(function() {

    var username = $("#Username").val();

    if(username === "Slay" || username === "Test"){
        $("#Wrong").show();
        $("#Ok").hide();

    }
    else {
        $("#Ok").show();
        $("#Wrong").hide();
     }

    if (username.length === 0){
        $("#Wrong").hide();
        $("#Ok").hide();

    }

});

$("#Pass").keyup(function() {

    var password = $("#Pass").val();

    if ( password.length > 0 && password.length < 6 ){
        $("#Faible").show();
        $("#Moyen").hide();

    }
    else if (password.length >= 6 && password.length < 9 ){
        $("#Faible").hide();
        $("#Moyen").show();
        $("#Fort").hide()

    }
    else if (password.length > 9 && Maj(password) && Num(password) ){
        $("#Fort").show();
        $("#Moyen").hide();
    }
    else{
        $("#Faible").hide();
        $("#Moyen").hide();
        $("#Fort").hide();
    }


});


function Maj(str) {
    return (/[A-Z]/.test(str));
}

function Num(str) {
    return (/[0-9]/.test(str));
}


$("#VPass").keyup(function() {

    var password = $("#Pass").val();
    var Vpassword = $("#VPass").val();

    if (password === Vpassword){
        $("#Same").show();
        $("#Diff").hide();
    }
    else {
        $("#Same").hide();
        $("#Diff").show();
    }
});

$("#Email").keyup(function() {

    var email = $("#Email").val();


    if (Comm(email) && Point(email)){
        $("#Valide").show();
        $("#Invalide").hide();
    }
    else {
        $("#Invalide").show();
        $("#Valide").hide();
    }

    if (email.length === 0){
        $("#Valide").hide();
        $("#Invalide").hide();
    }

});

function Comm(str) {
    return (/[@]/.test(str));
}

function Point(str) {
    return (/[.]/.test(str));
}


$( "#SW" ).click(function() {
    $('#personnages').hide();
    $("#images").show();
    $('img').attr('src' , 'img/1dcff7f4e1613d9e071a99ef8725402a.jpg');
    $("#StarWars").show();
    $("#Marvel2").hide();
    $("#DCok").hide();

});

$('#Yoda2').click(function () {

    $('#Images1').attr('src' , 'img/Yoda2.jpg');
    $('#personnages').show();

});

$('#Obiwan').click(function () {

    $('#Images1').attr('src' , 'img/Obiwan.jpg');
    $('#personnages').show();

});

$('#Darthvader').click(function () {

    $('#Images1').attr('src' , 'img/DV.jpg');
    $('#personnages').show();

});



$( "#Marvel" ).click(function() {
    $("#images").show();
    $('#personnages').hide();
    $('img').attr('src' , 'img/iron man.jpg');
    $("#Marvel2").show();
    $("#StarWars").hide();
});

$('#Spiderman').click(function () {

    $('#Images1').attr('src' , 'img/Spiderman.jpg');
    $('#personnages').show();

});

$('#Thor').click(function () {

    $('#Images1').attr('src' , 'img/thor.jpg');
    $('#personnages').show();

});

$('#Hulk').click(function () {

    $('#Images1').attr('src' , 'img/Hulk.jpg');
    $('#personnages').show();

});


$( "#DC" ).click(function() {
    $("#images").show();
    $('img').attr('src' , 'img/thumb-1920-72397.jpg');
    $("#DCok").show();
    $("#Marvel2").hide();
    $("#StarWars").hide();
    $('#personnages').hide();
});


$('#Batman2').click(function () {

    $('#Images1').attr('src' , 'img/batman.jpg');
    $('#personnages').show();

});


$('#Superman').click(function () {

    $('#Images1').attr('src' , 'img/SUperman.jpg');
    $('#personnages').show();

});


$('#Flash').click(function () {

    $('#Images1').attr('src' , 'img/Flash.jpg');
    $('#personnages').show();

});



