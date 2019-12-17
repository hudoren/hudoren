/*js.js */
/* Programmé par Jonathan Larouche */
/* Le 21 novembre 2019 */


$('#Invalid').hide();

$('#Carcajou').click(function () {
    $('#MdCarc').modal();
});


$('#Renard').click(function () {
    $('#MdRen').modal();
});


$('#Orignal').click(function () {
    $('#MdOri').modal();
});


$('#Ours').click(function () {
    $('#MdOurs').modal();
});


$('#LS').click(function () {
    $('#MdLS').modal();
});


$("#Email").keyup(function() {

    var email = $("#Email").val();


    if (Comm(email) && Point(email)){
        $("#Invalid").hide();
    }
    else {
        $('#Invalid').show();
    }

});

function Comm(str) {
    return (/[@]/.test(str));
}

function Point(str) {
    return (/[.]/.test(str));
}