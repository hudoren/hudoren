var src1;
var src2;
var premierClick;
var deuxiemeClick;
var click;
click = 1;
var nbr;
var caseT;
var i;

var tabImage = [false,false,false,false,false,false,false,false,false];

$(".img-fluid").click(function() {


    if (click === 1){
        premierClick = $(this).attr("id");
        src1 = $(this).attr('src');
        click =2;
    }
    else if (click === 2){
        deuxiemeClick= $(this).attr("id");
        src2 = $(this).attr('src');
        $("#" + premierClick).attr('src' , src2);
        $("#" + deuxiemeClick).attr('src' , src1);

        fini();
        click = 1;
    }
});

function fini() {

 if ( $("#image1").attr('src') === "images/1.jpg" && $("#image2").attr('src') === "images/2.jpg" && $("#image3").attr('src') === "images/3.jpg" && $("#image4").attr('src') === "images/4.jpg"
&& $("#image5").attr('src') === "images/5.jpg" && $("#image6").attr('src') === "images/6.jpg" && $("#image7").attr('src') === "images/7.jpg" && $("#image8").attr('src') === "images/8.jpg"
&& $("#image9").attr('src') === "images/9.jpg"){

    $('img').attr('src' , 'images/victoire.jpg');
}

}

$( "#boutonTricher" ).click(function() {
    $('img').attr('src' , 'images/victoire.jpg');
});

$( "#boutonRecommencer" ).click(function() {
    $('img').attr('src', "");

    caseT = false;

    for (var i=1; i <= 9; i++){
        while (!caseT){
            nbr = Math.floor((Math.random() * 9));

            if (tabImage[nbr] === false ){
                tabImage[nbr] = true;
                $('#image'+i).attr('src' , "images/"+Number(nbr+1) +".jpg");
                caseT = true;
            }
        }
        caseT=false;
    }
    tabImage = [false,false,false,false,false,false,false,false,false];


});