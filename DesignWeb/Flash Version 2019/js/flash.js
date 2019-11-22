//On positionne Flash en relative pour accéder aux déplacements X et Y
//Par défaut un élément est statique

var imgsrc;
imgsrc =1;
var post;
post= 1;
var fade;
fade =1;



$('#flashID').css("position","relative");


$( "#boutonDroite" ).click(function() {
    $('#flashID').css("left","300px");
});

$( "#boutonGauche" ).click(function() {
    $('#flashID').css("left","0px");
});

$( "#boutonChangerImage" ).click(function() {
if(imgsrc === 1){
    $('#flashID').attr("src", "./img/Flash2.png" );
    imgsrc =2;
}
else {
    $('#flashID').attr("src", "./img/Flash1.png" );
    imgsrc =1 ;
}
});

$( "#boutonEnleverImage" ).click(function() {
    $('#flashID').hide();
});

$( "#boutonAjouterImage" ).click(function() {
    $('#flashID').show();
});

$( "#boutonAjouterAttribut" ).click(function() {
    $('#flashID').attr("title", "L'homme le plus rapide");
});

$( "#boutonAjouterTitre" ).click(function() {
    $( '#Hfl' ).append( "<h1> Justice League</h1>" );
});

$( "#boutonDupliquer" ).click(function() {
    $("#dupl").append('<img id="flashID2" class="flashClass" src="img/Flash1.png" width="200px"/>');
});

$( "#boutonRalentir" ).click(function() {
    $("#flashID2").remove();
});

$( "#boutonTeleport" ).click(function() {
    if (post === 1){
        $('#flashID').insertAfter('#boutonPerso2');
        post = 2;
    }
    else  {
        $('#flashID').insertAfter('#Hfl');
        post =1;
    }
});

function flash() {
    $('#flashID').toggle();

}

$( "#boutonVitesseSupreme" ).click(function() {


   fade = setInterval(flash,500);

});

$( "#boutonFinVitesseSupreme" ).click(function() {
    clearInterval(fade);
    $('#flashID').show();
});



$( "#boutonNuke" ).click(function() {
    $('.centralCity').css("background-image","url(./img/hero_nuclear_blast.jpg)");
    $('.btn').hide();
});

$( "#boutonPerso1" ).click(function() {
    $('body').hide();

});

$( "#boutonPerso2" ).click(function() {
    $.playSound('./flash-gordon-theme-song-queen.mp3')

});