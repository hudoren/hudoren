$("#Generate").click(function() {

    var Poketype = $("#Pokeclass").val();

    if (Poketype === "Fire"){
        $('.bg').css("background-image","url(./img/Fire.jpg)");
    }
    else if (Poketype === "Dark"){
        $('.bg').css("background-image","url(./img/Dark.jpg)");
    }
    else if (Poketype === "Fighting"){
        $('.bg').css("background-image","url(./img/Fighting.jpg)");
    }

    else if (Poketype === "Grass"){
        $('.bg').css("background-image","url(./img/grass.jpg)");
    }

    else if (Poketype === "Psychic"){
        $('.bg').css("background-image","url(./img/Psychic.jpg)");
    }

    else if (Poketype === "Steel"){
        $('.bg').css("background-image","url(./img/Steel.jpg)");
    }

    else if (Poketype === "Water"){
        $('.bg').css("background-image","url(./img/Water.jpg)");
    }
    else if (Poketype === "Lightning"){
        $('.bg').css("background-image","url(./img/lightning.jpg)");
    }

    var name = $("#Name").val();

 $("#Cardname").html(name);


});
